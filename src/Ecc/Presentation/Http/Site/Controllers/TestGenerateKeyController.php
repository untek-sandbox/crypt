<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use Mdanter\Ecc\EccFactory;
use Mdanter\Ecc\Serializer\PrivateKey\DerPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PrivateKey\PemPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\DerPublicKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\PemPublicKeySerializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Core\FileSystem\Helpers\FileStorageHelper;
use ZnCore\Domain\Exceptions\UnprocessibleEntityException;
use ZnCrypt\Base\Domain\Helpers\CryptKeyHelper;
use ZnLib\Web\Symfony4\MicroApp\Interfaces\BuildFormInterface;

//ComposerHelper::requireAssert(EccFactory::class, 'mdanter/ecc');

class TestGenerateKeyController extends BaseController
{

    protected $viewsDir = __DIR__ . '/../views/bip39';

    private $privatePemFile = __DIR__ . '/../../../var/ecc/keys/private.pem';
    private $publicPemFile = __DIR__ . '/../../../var/ecc/keys/public.pem';
    private $signatureFile = __DIR__ . '/../../../var/ecc/keys/sig';

    public static function isHidden(): bool
    {
        return true;
    }
    
    public function __invoke(Request $request): Response
    {
        return $this->generate($request);
    }

    public function generate(Request $request): Response
    {
        $adapter = EccFactory::getAdapter();

        $this->printSubmit();

        if ($request->getMethod() == Request::METHOD_POST) {
            $generator = EccFactory::getNistCurves()->generator384();
            $private = $generator->createPrivateKey();
            $public = $private->getPublicKey();

            $pemPrivateKeySerializer = new PemPrivateKeySerializer(new DerPrivateKeySerializer($adapter));
            $pemPublicKeySerializer = new PemPublicKeySerializer(new DerPublicKeySerializer($adapter));
            $pemPrivate = $pemPrivateKeySerializer->serialize($private);
            $pemPublic = $pemPublicKeySerializer->serialize($public);

            FileStorageHelper::save($this->privatePemFile, $pemPrivate);
            FileStorageHelper::save($this->publicPemFile, $pemPublic);
        }

        if (file_exists($this->privatePemFile)) {

//            $useDerandomizedSignatures = true;
//            $algorithm = 'sha256';

## You'll be restoring from a key, as opposed to generating one.

            $private = $this->loadPrivateFromPemFile($this->privatePemFile);
            $public = $this->loadPublicFromPemFile($this->publicPemFile);

            $pemPrivateKeySerializer = new PemPrivateKeySerializer(new DerPrivateKeySerializer($adapter));
            $pemPublicKeySerializer = new PemPublicKeySerializer(new DerPublicKeySerializer($adapter));
            $pemPrivate = $pemPrivateKeySerializer->serialize($private);
            $pemPublic = $pemPublicKeySerializer->serialize($public);

            //dd($private);
        }
//        $adapter = EccFactory::getAdapter();
//        $generator = EccFactory::getNistCurves()->generator192();

        if (!empty($pemPrivate)) {
            $this->print('PEM private encoding:');
            $this->printCode($pemPrivate);
        }
        if (!empty($pemPublic)) {
            $this->print('PEM public encoding:');
            $this->printCode($pemPublic);
        }

        /*$derPrivateKeySerializer = new DerPrivateKeySerializer($adapter);
        $derPublicKeySerializer = new DerPublicKeySerializer($adapter);
        $derPrivate = $derPrivateKeySerializer->serialize($private);
        $derPublic = $derPublicKeySerializer->serialize($public);

        if (!empty($derPrivate)) {
            $this->print('DER private encoding:');
            $key = wordwrap(base64_encode($derPrivate), 64, PHP_EOL, true);
            $this->printCode($key);
        }
        if (!empty($derPublic)) {
            $this->print('DER public encoding:');
            $key = wordwrap(base64_encode($derPublic), 64, PHP_EOL, true);
            $this->printCode($key);
        }*/

        return $this->renderDefault();
    }
}
