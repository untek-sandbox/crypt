<?php

namespace Untek\Sandbox\Crypt\Kaz\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Crypt\Domain\Helpers\QrHelper;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Untek\Component\Encoder\Encoders\XmlEncoder;
use Untek\Component\Time\Enums\TimeEnum;
use Untek\Component\Web\Html\Helpers\HtmlHelper;
use Untek\Core\Container\Helpers\ContainerHelper;
//use App\Crypt\Domain\Helpers\QrHelper;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
//use ZnCore\Base\Encoders\XmlEncoder;
//use ZnCore\Base\Enums\Measure\TimeEnum;
//use ZnCore\Base\Helpers\HtmlHelper;
//use ZnCore\Domain\Helpers\EntityHelper;
//use ZnCrypt\Pki\XmlDSig\Domain\Libs\Signature;
//use ZnKaz\Egov\Facades\QrFacade;
use tFPDF;
use Untek\Core\Instance\Helpers\PropertyHelper;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\Signature;
use Untek\Kaz\Egov\Facades\QrFacade;

class EdsGetAuthXmlController extends AbstractSandboxController {

    protected $viewsDir = __DIR__ . '/../views/eds';

    private $rootCaFile = __DIR__ . '/../../../../../Crypt/resources/data/RobRichards/key/nca_rsa.crt';

    public function __invoke(Request $request): Response {
        $this->session->set('timeTicket', time() + (TimeEnum::SECOND_PER_MINUTE * 5));
        $dataForXml = ['root' => [
            'timeTicket' => $this->session->get('timeTicket'),
            'sessionId' => $this->session->getId()
        ]];
        $xmlEncoder = new XmlEncoder(true, 'UTF-8', false);
        return new JsonResponse(['authXml' => $xmlEncoder->encode($dataForXml)]);
    }
}