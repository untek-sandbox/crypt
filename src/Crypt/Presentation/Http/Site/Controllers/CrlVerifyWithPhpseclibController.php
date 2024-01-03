<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use phpseclib\File\X509;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CrlVerifyWithPhpseclibController extends AbstractSandboxController
{

    private $crlFile = __DIR__ . '/../../../../resources/data/nca_d_rsa.crl';
    
    public static function isHidden(): bool
    {
        return true;
    }
    
    public function __invoke(Request $request): Response
    {
        $binary = file_get_contents($this->crlFile);
        $x509 = new X509();
        $crl = $x509->loadCRL($binary);
        $this->alertInfo('Count revoked certificates: ' . count($crl['tbsCertList']['revokedCertificates']));
        $this->printHeader('First Certificate');
        $this->dump($crl['tbsCertList']['revokedCertificates'][0]);

        $this->printHeader('Head');
        unset($crl['tbsCertList']['revokedCertificates']);
        $this->dump($crl);

        return $this->renderDefault();
    }
}
