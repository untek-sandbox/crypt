<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;

class JsController extends AbstractSandboxController
{

    public static function menu(): array
    {
        return [
            JsCreateController::class,
            JsVerifyController::class,
        ];
    }
}
