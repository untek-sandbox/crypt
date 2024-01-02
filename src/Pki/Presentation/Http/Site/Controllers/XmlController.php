<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class XmlController extends BaseController
{

    public static function menu(): array
    {
        return [
            XmlSignController::class,
            XmlVerifyController::class,
        ];
    }
}
