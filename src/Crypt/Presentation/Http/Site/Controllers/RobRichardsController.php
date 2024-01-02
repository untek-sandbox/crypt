<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;

class RobRichardsController extends AbstractSandboxController
{

    public function __invoke(Request $request): Response
    {
        return $this->renderList([
            RobRichardsSignController::class,
            RobRichardsVerifyCaWithInfoController::class,
            RobRichardsVerifyWithInfoController::class,
        ]);
    }
}
