<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

class TestController extends BaseController
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
