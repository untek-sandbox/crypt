<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class XmlController extends AbstractSandboxMenuController
{

    public static function menu(): array
    {
        return [
            XmlSignController::class,
            XmlVerifyController::class,
        ];
    }
}
