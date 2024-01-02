<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class TestController extends BaseController
{

    public function __invoke(Request $request): Response
    {
        return $this->renderList([
            TestEncryptController::class,
            TestGenerateKeyController::class,
            TestSignController::class,
            TestVerifyController::class,
        ]);
    }
}
