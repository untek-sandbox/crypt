<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EgovQrValidateController extends AbstractSandboxController
{

    public static function isHidden(): bool
    {
        return true;
    }
    
    public function __invoke(Request $request): Response
    {
        $content = file_get_contents(__DIR__ . '/../../../../public/sigex/index.html');
        $content = str_replace('"assets/', '"sigex/assets/', $content);
        $this->print($content);

        return $this->renderDefault();
    }
}
