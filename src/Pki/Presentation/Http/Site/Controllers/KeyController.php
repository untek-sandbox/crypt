<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxMenuController;

class KeyController extends AbstractSandboxMenuController
{

    public static function menu(): array
    {
        return [
            KeyDownloadController::class,
            KeyGenerateCsrController::class,
            KeyIssueCertificateController::class,
            KeyRemoveUserKeyController::class,
            KeyVerifyCertificateController::class,
        ];
    }
}
