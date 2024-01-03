<?php

namespace Untek\Sandbox\Crypt\Kaz\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class EdsController extends AbstractSandboxMenuController
{

    public static function menu(): array
    {
        return [
            EdsCheckAuthXmlController::class,
            EdsGetAuthXmlController::class,
            EdsMainController::class,
            EdsMainGenerateXmlDocController::class,
            EdsVerifySignedXmlDocController::class,
        ];
    }
}