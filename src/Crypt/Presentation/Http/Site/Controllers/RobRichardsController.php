<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;

class RobRichardsController extends AbstractSandboxController
{

    public static function menu(): array
    {
        return [
            RobRichardsSignController::class,
            RobRichardsVerifyCaWithInfoController::class,
            RobRichardsVerifyWithInfoController::class,
        ];
    }
}
