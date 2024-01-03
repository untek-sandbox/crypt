<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class TestController extends AbstractSandboxMenuController
{

    public static function menu(): array
    {
        return [
            TestEncryptController::class,
            TestGenerateKeyController::class,
            TestSignController::class,
            TestVerifyController::class,
        ];
    }
}
