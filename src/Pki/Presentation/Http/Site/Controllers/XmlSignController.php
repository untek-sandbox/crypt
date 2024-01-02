<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms\SignXmlForm;
use Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms\VerifyXmlForm;
use phpseclib\File\X509;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Component\Encoder\Encoders\XmlEncoder;
use Untek\Core\FileSystem\Helpers\FileStorageHelper;
use Untek\Crypt\Base\Domain\Exceptions\CertificateExpiredException;
use Untek\Crypt\Base\Domain\Exceptions\FailCertificateSignatureException;
use Untek\Crypt\Base\Domain\Exceptions\FailSignatureException;
use Untek\Crypt\Base\Domain\Exceptions\InvalidDigestException;
use Untek\Crypt\Pki\XmlDSig\Domain\Entities\KeyEntity;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\KeyLoaders\DirectoryKeyLoader;
use Untek\Kaz\Eds\Domain\Libs\Certificate;
use Untek\Kaz\Eds\Domain\Libs\XmlSignature;
use Untek\Model\Validator\Exceptions\UnprocessableEntityException;

class XmlSignController extends BaseController
{

    private $keyLoader;

    public static function isHidden(): bool
    {
        return true;
    }

    public function __construct()
    {
        parent::__construct();
        $this->keyLoader = new DirectoryKeyLoader();
        $this->keyLoader->setDirectory($this->pkiDirectory);
    }

    public function __invoke(Request $request): Response
    {
        /** @var SignXmlForm $form */
        $form = new SignXmlForm($this->keyLoader);
        $form->setIssuerKey('rootCa');
        $form->setSubjectKey('user');
        $data = [
            'root' => [
                'id' => mt_rand(1, 9999999),
                'count' => mt_rand(1, 9999999),
                'date' => date('Y.m.d'),
                'time' => date('H:i:s'),
            ],
        ];
        $xmlEncoder = new XmlEncoder();
        $xmlEncoder->setIsInline(false);
        $xml = $xmlEncoder->encode($data);
        $form->setSourceXml($xml);

        $buildForm = $this->formManager->buildForm($form, $request);

        $subjectKeyEntity = $this->keyLoader->load($form->getSubjectKey());
        $issuerKeyEntity = $this->keyLoader->load($form->getIssuerKey());

        if ($subjectKeyEntity->getCertificate() == null) {
            $this->alertWarning('User certificate not found!');
            return $this->renderDefault();
        }

        if ($buildForm->isSubmitted() && $buildForm->isValid()) {
            try {

                $certificateValidator = new Certificate();
                $certificateValidator->setVerifySignature($form->isVerifyCertificateSignature());
                $certificateValidator->setVerifyDate($form->isVerifyCertificateDate());

                $signature = new XmlSignature($certificateValidator);
                $signature->setRootCa($issuerKeyEntity->getCertificate());
                $signature->loadPrivateKey($subjectKeyEntity->getPrivateKey(), $subjectKeyEntity->getPrivateKeyPassword());
                $signature->loadCertificate($subjectKeyEntity->getCertificate());
                $sourceXml = $form->getSourceXml();
                $signedXml = $signature->sign($sourceXml);
                FileStorageHelper::save(getenv('VAR_DIRECTORY') . '/xml-signer/signed.xml', $signedXml);
                $this->alertSuccess('XML signed!');

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

                $this->toTab('Signed xml');
                $this->print('<textarea class="form-control" style="font-size: 12px; font-family:monospace;" rows="20">' . $signedXml . '</textarea>');
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

        return $this->render(__DIR__ . '/../../../../resources/templates/xml/sign.php', [
            'formRender' => $this->formManager->createFormRender($buildForm),
        ]);
    }
}
