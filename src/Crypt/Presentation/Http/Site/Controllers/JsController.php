<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class JsController extends AbstractSandboxMenuController
{

    public static function menu(): array
    {
        return [
            JsCreateController::class,
            JsVerifyController::class,
        ];
    }
}
