<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms\P12FileForm;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Crypt\Pki\XmlDSig\Domain\Helpers\KeyLoaderHelper;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\KeyLoaders\DirectoryKeyLoader;
use Untek\Sandbox\Sandbox\Zip\Domain\Libs\ZipDirectory;

class ToolsP12ToFilesController extends BaseController
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
        $form = new P12FileForm();
        $buildForm = $this->formManager->buildForm($form, $request);
        if ($buildForm->isSubmitted() && $buildForm->isValid()) {
            $p12Content = $form->getFile()->getContent();
            $key = KeyLoaderHelper::loadFromP12($p12Content, $form->getPassword());
            $files = [
                'certificate.pem' => $key->getCertificate(),
                'password.txt' => $form->getPassword(),
                'private.pem' => $key->getPrivateKey(),
                'public.pem' => $key->getPublicKey(),
                'rsa.p12' => $p12Content,
            ];
            $zipDirectory = new ZipDirectory();
            $zipFile = $zipDirectory->createZipFromFileArray($files);
            return $this->openFile($zipFile, 'key.zip');
        }

        return $this->render(__DIR__ . '/../../../../resources/templates/tools/p12.php', [
            'formRender' => $this->formManager->createFormRender($buildForm),
        ]);
    }
}
