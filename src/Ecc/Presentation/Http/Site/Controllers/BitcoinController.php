<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class BitcoinController extends BaseController
{

    public function __invoke(Request $request): Response
    {
        return $this->renderList([
            BitcoinGenerateBip39Controller::class,
            BitcoinGenerateBitcoinBip39Controller::class,
            BitcoinGenerateBitcoinController::class,
        ]);
    }
}
