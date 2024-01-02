<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use Mdanter\Ecc\Crypto\Signature\Signer;
use Mdanter\Ecc\Crypto\Signature\SignHasher;
use Mdanter\Ecc\EccFactory;
use Mdanter\Ecc\Serializer\PrivateKey\DerPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PrivateKey\PemPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\DerPublicKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\PemPublicKeySerializer;
use Mdanter\Ecc\Serializer\Signature\DerSignatureSerializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Core\FileSystem\Helpers\FileStorageHelper;
use Untek\Sandbox\Module\Presentation\Http\Site\SingeInput\Forms\SingleInputForm;
use ZnCore\Domain\Exceptions\UnprocessibleEntityException;
use ZnCrypt\Base\Domain\Helpers\CryptKeyHelper;
use ZnLib\Web\Symfony4\MicroApp\Interfaces\BuildFormInterface;

//ComposerHelper::requireAssert(EccFactory::class, 'mdanter/ecc');

class TestVerifyController extends BaseController
{

    protected $viewsDir = __DIR__ . '/../views/bip39';

    private $privatePemFile = __DIR__ . '/../../../var/ecc/keys/private.pem';
    private $publicPemFile = __DIR__ . '/../../../var/ecc/keys/public.pem';
    private $signatureFile = __DIR__ . '/../../../var/ecc/keys/sig';

    public function __invoke(Request $request): Response
    {
        return $this->verify($request);
    }

    public function verify(Request $request): Response
    {
        $form = new SingleInputForm();
        $form->setValue('I am writing today...');
        $callback = function ($document) use ($request) {
            $adapter = EccFactory::getAdapter();
            if (file_exists($this->privatePemFile)) {
                $private = $this->loadPrivateFromPemFile($this->privatePemFile);
                $public = $this->loadPublicFromPemFile($this->publicPemFile);
                $pemPrivateKeySerializer = new PemPrivateKeySerializer(new DerPrivateKeySerializer($adapter));
                $pemPublicKeySerializer = new PemPublicKeySerializer(new DerPublicKeySerializer($adapter));
                $pemPrivate = $pemPrivateKeySerializer->serialize($private);
                $pemPublic = $pemPublicKeySerializer->serialize($public);
                $base64Signature = FileStorageHelper::load($this->signatureFile);
                $this->print('PEM private encoding:');
                $this->printCode($pemPrivate);
                $this->print('PEM public encoding:');
                $this->printCode($pemPublic);
                $this->print('signature:');
                $this->printCode(base64_encode($base64Signature));

                if ($request->getMethod() == Request::METHOD_POST) {
                    $adapter = EccFactory::getAdapter();
                    $generator = EccFactory::getNistCurves()->generator384();
                    $algorithm = 'sha256';
                    $binarySignature = base64_decode($base64Signature);
//                    $document = 'I am writing today...';

// Parse signature
                    $sigSerializer = new DerSignatureSerializer();
                    $sig = $sigSerializer->parse($binarySignature);

// Parse public key
                    $public = $this->loadPublicFromPemFile($this->publicPemFile);

                    $hasher = new SignHasher($algorithm);
                    $hash = $hasher->makeHash($document, $generator);

                    $signer = new Signer($adapter);
                    $check = $signer->verify($public, $sig, $hash);

                    if ($check) {
                        $this->alertSuccess('Signature verified');
                    } else {
                        $this->alertDanger('Signature validation failed');
                    }
                }

                $this->printSubmit();
            }
        };
        return $this->_form($request, $callback, $form);
    }
}
