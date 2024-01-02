<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class KeyController extends BaseController
{

    public function __invoke(Request $request): Response
    {
        return $this->renderList([
            KeyDownloadController::class,
            KeyGenerateCsrController::class,
            KeyIssueCertificateController::class,
            KeyRemoveUserKeyController::class,
            KeyVerifyCertificateController::class,
        ]);
    }
}
