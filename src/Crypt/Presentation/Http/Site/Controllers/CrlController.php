<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class CrlController extends AbstractSandboxMenuController
{

    public static function menu(): array
    {
        return [
            CrlVerifyController::class,
            CrlVerify1Controller::class,
            CrlVerifyWithPhpseclibController::class,
        ];
    }
}
