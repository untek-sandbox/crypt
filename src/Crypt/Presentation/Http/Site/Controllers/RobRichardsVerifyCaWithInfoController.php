<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use phpseclib\File\X509;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Core\Instance\Helpers\PropertyHelper;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\Signature;

class RobRichardsVerifyCaWithInfoController extends AbstractSandboxController
{

    private $rootCaFile = __DIR__ . '/../../../../resources/data/RobRichards/key/nca_rsa.crt';

    public static function isHidden(): bool
    {
        return true;
    }
    
    public function __invoke(Request $request): Response
    {
        $verify = new Signature();
//        $verify->setRootCa(file_get_contents($this->rootCaFile));
        $verifyEntity = $verify->verifyCertificate(file_get_contents($this->rootCaFile));

        $x509 = new X509();
        //$x509->loadCA($ca);
        $certArray = $x509->loadX509(file_get_contents($this->rootCaFile));
        $x509->validateSignature();

//        $verify = new Signature();
//        $verifyEntity = $verify->verifyCertificate(file_get_contents($this->rootCaFile));

        $this->toTab('certificate');
        $this->printArray($certArray);

        $this->toTab('fingerprint');
        $this->printArray(PropertyHelper::toArray($verifyEntity->getFingerprint()));

        return $this->renderDefault();
    }
}
