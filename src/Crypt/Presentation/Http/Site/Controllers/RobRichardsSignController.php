<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\Signature;

class RobRichardsSignController extends AbstractSandboxController
{

    private $privateKeyFile = __DIR__ . '/../../../../resources/data/RobRichards/key/pair/private.pem';
    private $password = '';

    private $sourceXmlFile = __DIR__ . '/../../../../resources/data/RobRichards/xml/almas/source.xml';
    private $signedXmlFile = __DIR__ . '/../../../../resources/data/RobRichards/xml/almas/signed.xml';

    public static function isHidden(): bool
    {
        return true;
    }
    
    public function __invoke(Request $request): Response
    {
        $signature = new Signature();
        $signature->loadPrivateKey(file_get_contents($this->privateKeyFile, $this->password));
        $sourceXml = file_get_contents($this->sourceXmlFile);
        $signedXml = $signature->sign($sourceXml);
        file_put_contents($this->signedXmlFile, $signedXml);

        $this->alertSuccess('Signed!');

        //$signedXmlCode = file_get_contents($this->signedXmlFile);

        $this->toTab('Source XML');
        $this->printCode($sourceXml);
        $this->printHeader('Pretty');
        $this->printPrettyXml($sourceXml);

        $this->toTab('Signed XML');
        $this->printCode($signedXml);
        $this->printHeader('Pretty');
        $this->printPrettyXml($signedXml);

        return $this->renderDefault();
    }
}
