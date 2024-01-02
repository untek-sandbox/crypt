<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class JsCreateController extends AbstractSandboxController
{

    public function __invoke(Request $request): Response
    {
        //https://github.com/PeculiarVentures/xadesjs#readme
        return $this->renderFile(__DIR__ . '/../../../../resources/templates/js/create.php', [
            'model' => $request->request->all(),
        ]);
    }
}
