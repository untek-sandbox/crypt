<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

class BitcoinController extends BaseController
{

    public static function menu(): array
    {
        return [
            BitcoinGenerateBip39Controller::class,
            BitcoinGenerateBitcoinBip39Controller::class,
            BitcoinGenerateBitcoinController::class,
        ];
    }
}
