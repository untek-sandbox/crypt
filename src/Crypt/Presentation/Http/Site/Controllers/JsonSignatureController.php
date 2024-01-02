<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Crypt\Base\Domain\Enums\EncodingEnum;
use Untek\Crypt\Base\Domain\Enums\HashAlgoEnum;
use Untek\Crypt\Base\Domain\Enums\OpenSslAlgoEnum;
use Untek\Crypt\Pki\Domain\Helpers\RsaKeyLoaderHelper;
use Untek\Crypt\Pki\JsonDSig\Domain\Entities\SignatureEntity;
use Untek\Crypt\Pki\JsonDSig\Domain\Libs\OpenSsl\OpenSslSignature;
use ZnTool\Dev\Runtime\Domain\Helpers\Benchmark;

class JsonSignatureController extends AbstractSandboxController
{

    private $directoryCa = __DIR__ . '/../../../../resources/var/rootCa';
    private $directoryUser = __DIR__ . '/../../../../resources/var/user';

    public function __invoke(Request $request): Response
    {
        $body = [
            'id' => 1,
            'name' => 'Bob',
            'status' => 100,
        ];

        //Benchmark::begin('dd');
        $keyCaStore = RsaKeyLoaderHelper::loadKeyStoreFromDirectory($this->directoryCa);
        $keyStoreUser = RsaKeyLoaderHelper::loadKeyStoreFromDirectory($this->directoryUser);
        $openSslSignature = new OpenSslSignature($keyStoreUser);
        $openSslSignature->loadCA($keyCaStore->getCertificate());

        $signatureEntity = new SignatureEntity();
        $signatureEntity->setDigestMethod(HashAlgoEnum::SHA256);
        $signatureEntity->setDigestFormat(EncodingEnum::BASE64);
        $signatureEntity->setSignatureMethod(OpenSslAlgoEnum::SHA256);
        $signatureEntity->setSignatureFormat(EncodingEnum::BASE64);

        $openSslSignature->sign($body, $signatureEntity);

        try {
            $openSslSignature->verify($body, $signatureEntity);
            $this->alertSuccess('Verified!');
        } catch (\Exception $e) {
            $this->alertDanger('Not verified! ' . $e->getMessage());
        }
        //Benchmark::end('dd');
        //$this->print(Benchmark::all()['dd']['duration']);

        $this->printObject($signatureEntity);

        return $this->renderDefault();
    }
}
