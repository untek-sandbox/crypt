<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Crypt\Domain\Helpers\CrlHelper;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CrlVerifyController extends AbstractSandboxController
{

    private $crlFile = __DIR__ . '/../../../../resources/data/nca_d_rsa.crl';

    public static function isHidden(): bool
    {
        return true;
    }
    
    public function __invoke(Request $request): Response
    {
        $binary = file_get_contents($this->crlFile);
        $arr = CrlHelper::parse($binary);
        $this->alertInfo('Count revoked certificates: ' . count($arr));
        $this->printHeader('First Certificate');
        $this->dd($arr[0]);
        return $this->renderDefault();
    }
}
