<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class RobRichardsController extends AbstractSandboxMenuController
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
