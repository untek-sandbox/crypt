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

//ComposerHelper::requireAssert(EccFactory::class, 'mdanter/ecc');

class TestSignController extends BaseController
{

    protected $viewsDir = __DIR__ . '/../views/bip39';

    private $privatePemFile = __DIR__ . '/../../../var/ecc/keys/private.pem';
    private $publicPemFile = __DIR__ . '/../../../var/ecc/keys/public.pem';
    private $signatureFile = __DIR__ . '/../../../var/ecc/keys/sig';

    public function __invoke(Request $request): Response
    {
        return $this->sign($request);
    }

    public function sign(Request $request): Response
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
                $this->print('PEM private encoding:');
                $this->printCode($pemPrivate);
                $this->print('PEM public encoding:');
                $this->printCode($pemPublic);
                if ($request->getMethod() == Request::METHOD_POST) {
                    $adapter = EccFactory::getAdapter();
                    $generator = EccFactory::getNistCurves()->generator384();
                    $useDerandomizedSignatures = true;
                    $algorithm = 'sha256';

//                    $document = 'I am writing today...';

                    $hasher = new SignHasher($algorithm, $adapter);
                    $hash = $hasher->makeHash($document, $generator);


                    # Derandomized signatures are not necessary, but is avoids
                    # the risk of a low entropy RNG, causing accidental reuse
                    # of a k value for a different message, which leaks the
                    # private key.
                    if ($useDerandomizedSignatures) {
                        $random = \Mdanter\Ecc\Random\RandomGeneratorFactory::getHmacRandomGenerator($private, $hash, $algorithm);
                    } else {
                        $random = \Mdanter\Ecc\Random\RandomGeneratorFactory::getRandomGenerator();
                    }
                    $randomK = $random->generate($generator->getOrder());

                    $signer = new Signer($adapter);
                    $signature = $signer->sign($private, $hash, $randomK);

                    $serializer = new DerSignatureSerializer();
                    $serializedSig = $serializer->serialize($signature);
                    $this->print('signature:');
                    $this->printCode(base64_encode($serializedSig));
                    FileStorageHelper::save($this->signatureFile, base64_encode($serializedSig));
                }

                $this->printSubmit();
            }
        };
        return $this->_form($request, $callback, $form);
    }
}
