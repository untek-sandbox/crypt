<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;

class EgovController extends AbstractSandboxController
{

    public static function menu(): array
    {
        return [
            EgovQrGenerateController::class,
            EgovQrValidateController::class,
        ];
    }
}
