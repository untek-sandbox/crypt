<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Core\Instance\Helpers\PropertyHelper;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\Signature;

class RobRichardsVerifyWithInfoController extends AbstractSandboxController
{

    private $originalXmlFile = __DIR__ . '/../../../../resources/data/RobRichards/xml/almas/original.xml';
    private $rootCaFile = __DIR__ . '/../../../../resources/data/RobRichards/key/nca_rsa.crt';

    public function __invoke(Request $request): Response
    {
        $verify = new Signature();
        $verify->setRootCa(file_get_contents($this->rootCaFile));
        $verifyEntity = $verify->verify(file_get_contents($this->originalXmlFile));

        if ($verifyEntity->isDigest()) {
            $this->alertSuccess('Digest validated!');
        } else {
            $this->alertDanger('Digest fail!');
        }

        if ($verifyEntity->isCertificateSignature()) {
            $this->alertSuccess('Certificate signature validated!');
        } else {
            $this->alertDanger('Certificate signature fail!');
        }

        if ($verifyEntity->isCertificateDate()) {
            $this->alertSuccess('Certificate date validated!');
        } else {
            $this->alertDanger('Certificate date fail!');
        }

        if ($verifyEntity->isSignature()) {
            $this->alertSuccess('Signature validated!');
        } else {
            $this->alertDanger('Signature fail!');
        }

        $this->toTab('certificate_subject');
        $this->printArray(PropertyHelper::toArray($verifyEntity->getPerson()));

        $this->toTab('document');
        $this->printPrettyXml(file_get_contents($this->originalXmlFile));

        $this->toTab('certificate');
        $this->printArray(PropertyHelper::toArray($verifyEntity->getCertificateData()));

        $this->toTab('fingerprint');
        $this->printArray(PropertyHelper::toArray($verifyEntity->getFingerprint()));

        return $this->renderDefault();
    }
}
