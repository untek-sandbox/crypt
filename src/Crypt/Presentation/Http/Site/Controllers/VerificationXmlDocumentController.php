<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use phpseclib\File\X509;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Component\Encoder\Encoders\XmlEncoder;
use Untek\Core\Instance\Helpers\PropertyHelper;
//use ZnCore\Base\Encoders\XmlEncoder;
use Untek\Crypt\Pki\XmlDSig\Domain\Helpers\KeyLoaderHelper;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\Signature;

class VerificationXmlDocumentController extends AbstractSandboxController
{

//    protected $viewsDir = __DIR__ . '/../views/verification';

    private $rootCaFile = __DIR__ . '/../../../../resources/data/RobRichards/key/nca_rsa.crt';

    public function __invoke(Request $request): Response
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            /** @var UploadedFile $uploaded */
            $uploaded = $request->files->get('file');
            if ($uploaded) {
                $filePath = $uploaded->getRealPath();
                $xml = file_get_contents($filePath);
            } else {
                $xml = $request->request->get('xml');
            }
            if(!empty($xml)) {
                $verify = new Signature();
                $verify->setRootCa(file_get_contents($this->rootCaFile));
                $verifyEntity = $verify->verify($xml);

//                dd($verifyEntity);

                if ($verifyEntity->isDigest()) {
                    $this->alertSuccess('Digest validated!');
                } else {
                    $this->alertDanger('Digest fail!');
                }

                if ($verifyEntity->isSignature()) {
                    $this->alertSuccess('Signature validated!');
                } else {
                    $this->alertDanger('Signature fail!');
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

                $this->toTab('subject');

                $this->printArray(PropertyHelper::toArray($verifyEntity->getPerson()));

                $this->toTab('document');

                $xmlEncoder = new XmlEncoder(true, 'UTF-8', false);
                $data = $xmlEncoder->decode($xml);
                unset($data['root']['ds:Signature']);
                $this->printArray($data['root']);
            }
        }

        return $this->renderFile(__DIR__ . '/../../../../resources/templates/verification/xml.php', [
            'model' => $request->request->all(),
        ]);
    }
}
