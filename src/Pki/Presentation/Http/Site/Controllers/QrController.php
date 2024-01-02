<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Crypt\Domain\Helpers\QrHelper;
use Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms\VerifyXmlForm;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Crypt\Base\Domain\Exceptions\CertificateExpiredException;
use Untek\Crypt\Base\Domain\Exceptions\FailCertificateSignatureException;
use Untek\Crypt\Base\Domain\Exceptions\FailSignatureException;
use Untek\Crypt\Base\Domain\Exceptions\InvalidDigestException;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\KeyLoaders\DirectoryKeyLoader;
use Untek\Kaz\Eds\Domain\Libs\Certificate;
use Untek\Kaz\Eds\Domain\Libs\XmlSignature;
use Untek\Kaz\Egov\Facades\QrFacade;
use Untek\Model\Validator\Exceptions\UnprocessableEntityException;

class QrController extends BaseController
{

    private $keyLoader;

    public function __construct()
    {
        parent::__construct();
        $this->keyLoader = new DirectoryKeyLoader();
        $this->keyLoader->setDirectory($this->pkiDirectory);
    }

    public function __invoke(Request $request): Response
    {
        /** @var VerifyXmlForm $form */
        $form = new VerifyXmlForm($this->keyLoader);
        $form->setIssuerKey('rootCa');
        $form->setSubjectKey('user');
        $form->setSignedXml(file_get_contents(getenv('VAR_DIRECTORY') . '/xml-signer/signed.xml'));

        $buildForm = $this->formManager->buildForm($form, $request);

//        $subjectKeyEntity = $this->keyLoader->load($form->getSubjectKey());
        $issuerKeyEntity = $this->keyLoader->load($form->getIssuerKey());

        if ($buildForm->isSubmitted() && $buildForm->isValid()) {
            $certificateValidator = new Certificate();
            $certificateValidator->setVerifySignature($form->isVerifyCertificateSignature());
            $certificateValidator->setVerifyDate($form->isVerifyCertificateDate());
            $signature = new XmlSignature($certificateValidator);
            $signature->setRootCa($issuerKeyEntity->getCertificate());

            try {
                $signature->verify($form->getSignedXml());

                if ($form->isVerifyCertificateSignature()) {
                    $this->alertSuccess('Certificate signature validated!');
                } else {
                    $this->alertWarning('Certificate signature disabled!');
                }

                if ($form->isVerifyCertificateDate()) {
                    $this->alertSuccess('Certificate date validated!');
                } else {
                    $this->alertWarning('Certificate date disabled!');
                }

                $this->alertSuccess('Success xml digest!');
                $this->alertSuccess('Success xml signature!');

//                $this->toTab('Qr');
                $encoded = QrFacade::generateQrCode($form->getSignedXml(), 5, 800);
                $content = QrHelper::print($encoded);
                $this->print($content);

            } catch (UnprocessableEntityException $e) {
                $this->formManager->setUnprocessableErrorsToForm($buildForm, $e);
            } catch (FailCertificateSignatureException $e) {
                $this->alertDanger('Certificate signature fail!');
            } catch (CertificateExpiredException $e) {
                $this->alertDanger('Certificate date fail!');
            } catch (InvalidDigestException $e) {
                $this->alertDanger('Invalid xml digest!');
            } catch (FailSignatureException $e) {
                $this->alertDanger('Fail xml signature!');
            }
        }

        return $this->renderDefault([
            'formRender' => $this->formManager->createFormRender($buildForm),
        ]);
    }
}
