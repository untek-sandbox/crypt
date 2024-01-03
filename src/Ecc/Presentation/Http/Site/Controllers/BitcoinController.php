<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class BitcoinController extends AbstractSandboxMenuController
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
