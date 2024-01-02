<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use phpseclib\File\X509;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Component\Encoder\Encoders\XmlEncoder;
use Untek\Core\Instance\Helpers\PropertyHelper;
//use ZnCore\Base\Encoders\XmlEncoder;
use Untek\Crypt\Pki\XmlDSig\Domain\Helpers\KeyLoaderHelper;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\Signature;

class VerificationP12Controller extends AbstractSandboxController
{

//    protected $viewsDir = __DIR__ . '/../views/verification';

    private $rootCaFile = __DIR__ . '/../../../../resources/data/RobRichards/key/nca_rsa.crt';

    public function __invoke(Request $request): Response
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            /** @var UploadedFile $uploaded */
            $uploaded = $request->files->get('file');
            if ($uploaded) {
                $filePath = $uploaded->getRealPath();
                $privateKeyUserPassword = $request->request->get('password');
                $p12UserPem = file_get_contents($filePath);
                $userKeyEntity = KeyLoaderHelper::loadFromP12($p12UserPem, $privateKeyUserPassword);

                $x509 = new X509();
                $x509->loadCA(file_get_contents($this->rootCaFile));
                $certArray = $x509->loadX509($userKeyEntity->getCertificate());

                if ($x509->validateSignature()) {
                    $this->alertSuccess('Certificate signature validated!');
                } else {
                    $this->alertDanger('Certificate signature fail!');
                }

                if ($x509->validateDate()) {
                    $this->alertSuccess('Certificate date validated!');
                } else {
                    $this->alertDanger('Certificate date fail!');
                }

                $this->toTab('certificate');

                $this->printArray($certArray);
            } else {
                $this->alertWarning('Select file');
            }
        }

        return $this->renderFile(__DIR__ . '/../../../../resources/templates/verification/p12.php');
    }
}
