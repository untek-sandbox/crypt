<?php

namespace Untek\Sandbox\Crypt\Kaz\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Crypt\Domain\Helpers\QrHelper;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Untek\Component\Encoder\Encoders\XmlEncoder;
use Untek\Component\Measure\Time\Enums\TimeEnum;
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

class EdsCheckAuthXmlController extends AbstractSandboxController {

    protected $viewsDir = __DIR__ . '/../views/eds';

    private $rootCaFile = __DIR__ . '/../../../../../Crypt/resources/data/RobRichards/key/nca_rsa.crt';

    public static function isHidden(): bool
    {
        return true;
    }

    public function __invoke(Request $request): Response {
        if ($request->getMethod() == 'POST') {
            $signedAuthXml = $request->request->get('signedAuthXml');
            $verify = new Signature();
            $verify->setRootCa(file_get_contents($this->rootCaFile));
            $verifyEntity = $verify->verify($signedAuthXml);
            $authXmlData = simplexml_load_string($signedAuthXml);
            if (
                $verifyEntity->isDigest() &&
                $verifyEntity->isSignature() &&
                $verifyEntity->isCertificateSignature() &&
                $verifyEntity->isCertificateDate() &&
                ($authXmlData->timeTicket == $this->session->get('timeTicket')) &&
                ($authXmlData->timeTicket > time()) &&
                ($authXmlData->sessionId == $this->session->getId())
            ) {
                $personData = PropertyHelper::toArray($verifyEntity->getPerson());
                $this->session->set('code', $personData['code']);
                return new JsonResponse(['personData' => $personData]);
            } else {
                return new JsonResponse(['personData' => []]);
            }
        }
    }
}