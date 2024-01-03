<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class CreateCertController extends AbstractSandboxMenuController
{

    public static function menu(): array
    {
        return [
            CreateCertGenerateRootCaController::class,
            CreateCertGenerateUserController::class,
            CreateCertGenerateUserCsrController::class,
            CreateCertSignUserCsrController::class,
            CreateCertVerifyUserController::class,
        ];
    }
}
