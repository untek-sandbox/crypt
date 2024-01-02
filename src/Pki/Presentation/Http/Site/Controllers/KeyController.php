<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

class KeyController extends BaseController
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
