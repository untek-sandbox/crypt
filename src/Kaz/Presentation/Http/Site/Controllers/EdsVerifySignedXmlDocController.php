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

class EdsVerifySignedXmlDocController extends AbstractSandboxController {

    protected $viewsDir = __DIR__ . '/../views/eds';

    private $rootCaFile = __DIR__ . '/../../../../../Crypt/resources/data/RobRichards/key/nca_rsa.crt';

    public function __invoke(Request $request): Response {
        if ($request->getMethod() == 'POST') {
            $signedXmlDoc = $request->request->get('signedXmlDoc');
            $verify = new Signature();
            $verify->setRootCa(file_get_contents($this->rootCaFile));
            $verifyEntity = $verify->verify($signedXmlDoc);
            $personData = PropertyHelper::toArray($verifyEntity->getPerson());
            $signedXmlDocData = simplexml_load_string($signedXmlDoc);
            $qrCollection = QrFacade::generateQrCode($signedXmlDoc, 5, 600, 1183, 'jpg');
            $qr = QrHelper::print($qrCollection);
            $qrImages = [];
            foreach($qrCollection->all() as $fileEntity) {
                array_push(
                    $qrImages,
                    'data://text/plain;base64,' . explode(
                        ',',
                        HtmlHelper::generateBase64Content($fileEntity->getContent(), $fileEntity->getMimeType()), 2
                    )[1]
                );
            }
            $rootDir = $_SERVER['DOCUMENT_ROOT'];
            $pdfFileUrl = '/pdf/' . $this->session->getId() . '.pdf';
            $pdf = new tFPDF();
            $pdf->AddPage();
            $pdf->AddFont('DejaVu','','DejaVuSansCondensed.ttf',true);
            $pdf->SetFont('DejaVu','',14);
            $pdf->Cell(95,10, $personData['surname']); $pdf->Ln(10);
            $pdf->Cell(95,10, $personData['name']); $pdf->Ln(10);
            $pdf->Cell(95,10, $personData['patronymic']); $pdf->Ln(10);
            $pdf->Cell(95,10, $personData['code']); $pdf->Ln(10);
            $pdf->Cell(95,10, $personData['email']); $pdf->Ln(10);
            foreach($signedXmlDocData as $key => $value) {
                $pdf->Cell(95,10, $key, 1);
                $pdf->Cell(95,10, $value, 1);
                $pdf->Ln(10);
            }
            $qrImagesCount = 5;
            foreach($qrImages as $qrImage) {
                $pdf->Image($qrImage, $qrImagesCount,100,50,50,'jpg');
                $qrImagesCount += 50;
            }
            $pdf->Output('F', $rootDir . $pdfFileUrl);
            return new JsonResponse([
                'digest' => ($verifyEntity->isDigest()) ? 'Digest validated!' : 'Digest fail!',
                'signature' => ($verifyEntity->isSignature()) ? 'Signature validated!' : 'Signature fail!',
                'certificateSignature' => ($verifyEntity->isCertificateSignature()) ? 'Certificate signature validated!' : 'Certificate signature fail!',
                'certificateDate' => ($verifyEntity->isCertificateDate()) ? 'Certificate date validated!' : 'Certificate date fail!',
                'personData' => $personData,
                'qr' => $qr,
                'pdfFileUrl' => $pdfFileUrl
            ]);
        }
    }
}