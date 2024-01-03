<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class EgovController extends AbstractSandboxMenuController
{

    public static function menu(): array
    {
        return [
            EgovQrGenerateController::class,
            EgovQrValidateController::class,
        ];
    }
}
