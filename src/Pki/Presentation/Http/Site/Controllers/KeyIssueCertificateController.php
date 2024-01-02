<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Crypt\Domain\Helpers\PkiHelper;
use Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms\IssueCertificateForm;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\KeyLoaders\DirectoryKeyLoader;
use Untek\Kaz\Eds\Domain\Services\CertificateService;
use Untek\Model\Validator\Exceptions\UnprocessableEntityException;

class KeyIssueCertificateController extends BaseController
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
        $subjectKeyEntity = $this->keyLoader->load('user');

        /** @var IssueCertificateForm $form */
        $form = new IssueCertificateForm($this->keyLoader);
        $form->setIssuerKey('rootCa');
        $form->setCertificateRequest($subjectKeyEntity->getCsr());
        $form->setExpiredAt(date('2021-05-14 09:06:35'));

        $buildForm = $this->formManager->buildForm($form, $request);
        if (!$buildForm->isSubmitted() && $subjectKeyEntity->getCertificate()) {
            $this->alertWarning('Certificate found <a class="btn btn-warning" href="/sandbox/pki/key-remove-user-key">Remove</a> <a href="/sandbox/pki/key-download" class="btn btn-primary">Download archive</a>');
            $this->printKey($subjectKeyEntity);
        }
        if ($buildForm->isSubmitted() && $buildForm->isValid()) {
            try {
                $issuerKeyEntity = $this->keyLoader->load($form->getIssuerKey());
                $subjectKeyEntity = PkiHelper::signUserCsr($issuerKeyEntity, $subjectKeyEntity);
                $this->keyLoader->save('user', $subjectKeyEntity);

                $this->alertSuccess('Certificate created!');

                $this->print('<a href="/sandbox/pki/key-download" class="btn btn-primary">Download archive</a>');

                $this->printKey($subjectKeyEntity);
            } catch (UnprocessableEntityException $e) {
                $this->formManager->setUnprocessableErrorsToForm($buildForm, $e);
            }
        }

        return $this->renderFile(__DIR__ . '/../../../../resources/templates/key/issue-certificate.php', [
            'formRender' => $this->formManager->createFormRender($buildForm),
        ]);
    }
}
