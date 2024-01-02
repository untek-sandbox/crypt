<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;

class CrlController extends AbstractSandboxController
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
