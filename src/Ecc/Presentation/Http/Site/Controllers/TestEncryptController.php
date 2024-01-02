<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use Mdanter\Ecc\EccFactory;
use Mdanter\Ecc\Serializer\PrivateKey\DerPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PrivateKey\PemPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\DerPublicKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\PemPublicKeySerializer;
use ParagonIE\EasyECC\EasyECC;
use ParagonIE\EasyECC\Integration\Defuse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Crypt\Base\Domain\Helpers\CryptKeyHelper;
use ZnCore\Domain\Exceptions\UnprocessibleEntityException;
use ZnLib\Web\Symfony4\MicroApp\Interfaces\BuildFormInterface;

//ComposerHelper::requireAssert(EccFactory::class, 'mdanter/ecc');

class TestEncryptController extends BaseController
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
        return $this->crypt($request);
    }

    public function crypt(Request $request): Response
    {
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


            $ecc = new EasyECC('P384');
//            $ecc->scalarmult($private, $public);

            $alicePrivateKey = $ecc->generatePrivateKey();
            $alicePublicKey = $alicePrivateKey->getPublicKey();
            $bobPrivateKey = $ecc->generatePrivateKey();
            $bobPublicKey = $bobPrivateKey->getPublicKey();

            $defuse = new Defuse($ecc);

            $symmetricKey = $defuse->keyExchange($alicePrivateKey, $bobPublicKey, true);
            $this->printHeader('symmetricKey from client');
            $this->printCode(CryptKeyHelper::formatKeyBlock($symmetricKey->saveToAsciiSafeString()));

            $symmetricKey = $defuse->keyExchange($bobPrivateKey, $alicePublicKey, false);
            $this->printHeader('symmetricKey from client');
            $this->printCode(CryptKeyHelper::formatKeyBlock($symmetricKey->saveToAsciiSafeString()));

            $message = 'This is a test message.';
            $this->printHeader('ciphertext');
            $ciphertext = $defuse->asymmetricEncrypt($message, $alicePrivateKey, $bobPublicKey);
            $this->printCode(CryptKeyHelper::formatKeyBlock($ciphertext));

            $this->printHeader('Decrypt');
            $this->printCode($defuse->asymmetricDecrypt($ciphertext, $bobPrivateKey, $alicePublicKey));

        }

        return $this->renderDefault();
    }
}
