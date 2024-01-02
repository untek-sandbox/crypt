<?php

namespace Untek\Sandbox\Crypt\Kaz\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class NcaLayerController extends AbstractSandboxController
{

    public function __invoke(Request $request): Response
    {
        return $this->renderFile(__DIR__ . '/../../../../resources/templates/nca-layer/index.php');
    }
}
