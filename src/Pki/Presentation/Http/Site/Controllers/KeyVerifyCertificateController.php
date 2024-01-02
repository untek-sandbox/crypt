<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms\VerifyCertificateForm;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Crypt\Base\Domain\Exceptions\CertificateExpiredException;
use Untek\Crypt\Base\Domain\Exceptions\FailCertificateSignatureException;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\KeyLoaders\DirectoryKeyLoader;
use Untek\Kaz\Eds\Domain\Services\CertificateService;
use Untek\Model\Validator\Exceptions\UnprocessableEntityException;

class KeyVerifyCertificateController extends BaseController
{

    private $keyLoader;
    private $certificateService;

    public static function isHidden(): bool
    {
        return true;
    }

    public function __construct()
    {
        parent::__construct();
        $this->keyLoader = new DirectoryKeyLoader();
        $this->keyLoader->setDirectory($this->pkiDirectory);
//        PKI_DIRECTORY=${ROOT_DIRECTORY}/var/pki
//        $this->keyLoader->setDirectory(getenv('PKI_DIRECTORY'));
        $this->certificateService = new CertificateService();
    }

    public function __invoke(Request $request): Response
    {
        /** @var VerifyCertificateForm $form */
        $form = new VerifyCertificateForm($this->keyLoader);
        $form->setIssuerKey('rootCa');

        $buildForm = $this->formManager->buildForm($form, $request);

        $subjectKeyEntity = $this->keyLoader->load('user');
        $issuerKeyEntity = $this->keyLoader->load($form->getIssuerKey());

        if ($subjectKeyEntity->getCertificate() == null) {
            $this->alertWarning('User certificate not found!');
            return $this->renderDefault();
        }

        if ($issuerKeyEntity->getCertificate() == null) {
            $this->alertWarning('CA certificate not found!');
            return $this->renderDefault();
        }

        if ($buildForm->isSubmitted() && $buildForm->isValid()) {
            try {
                try {
                    $this->certificateService->verifyByCa($subjectKeyEntity->getCertificate(), $issuerKeyEntity->getCertificate());
                    $this->alertSuccess('Certificate signature validated!');
                    $this->alertSuccess('Certificate date validated!');
                } catch (FailCertificateSignatureException $e) {
                    $this->alertDanger('Certificate signature fail!');
                } catch (CertificateExpiredException $e) {
                    $this->alertDanger('Certificate date fail!');
                }

                $this->printKey($subjectKeyEntity);
            } catch (UnprocessableEntityException $e) {
                $this->formManager->setUnprocessableErrorsToForm($buildForm, $e);
            }
        }

        return $this->renderFile(__DIR__ . '/../../../../resources/templates/key/verify-certificate.php', [
            'formRender' => $this->formManager->createFormRender($buildForm),
        ]);
    }
}
