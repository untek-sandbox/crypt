<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class JsVerifyController extends AbstractSandboxController
{

    public static function isHidden(): bool
    {
        return true;
    }

    public function __invoke(Request $request): Response
    {
        return $this->render(__DIR__ . '/../../../../resources/templates/js/verify.php', [
            'model' => $request->request->all(),
        ]);
    }
}
