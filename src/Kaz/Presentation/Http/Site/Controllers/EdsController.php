<?php

namespace Untek\Sandbox\Crypt\Kaz\Presentation\Http\Site\Controllers;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;

class EdsController extends AbstractSandboxController
{

    public function __invoke(Request $request): Response
    {
        return $this->renderList([
            EdsCheckAuthXmlController::class,
            EdsGetAuthXmlController::class,
            EdsMainController::class,
            EdsMainGenerateXmlDocController::class,
            EdsVerifySignedXmlDocController::class,
        ]);
    }
}