<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Crypt\Domain\Helpers\QrHelper;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Kaz\Egov\Facades\QrFacade;

class EgovQrGenerateController extends AbstractSandboxController
{

    public function __invoke(Request $request): Response
    {
        $form = '
            <form action="' . $_SERVER['REQUEST_URI'] . '" method="post">
                <button type="submit">Generate</button>
            </form>';
        $this->print($form);

        $input = file_get_contents(__DIR__ . '/../../../../resources/data/EgovQr/zarina.xml');
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $encoded = QrFacade::generateQrCode($input, 5, 800);
            $content = QrHelper::print($encoded);
            $this->print($content);
        } else {
            $this->printPrettyXml($input);
        }
        return $this->renderDefault();
    }
}
