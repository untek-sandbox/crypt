<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use App\Common\SingeInput\Forms\SingleButtonForm;
use App\Common\SingeInput\Forms\SingleInputForm;
use BitWasp\Bitcoin\Address\AddressCreator;
use BitWasp\Bitcoin\Address\PayToPubKeyHashAddress;
use BitWasp\Bitcoin\Address\ScriptHashAddress;
use BitWasp\Bitcoin\Address\SegwitAddress;
use BitWasp\Bitcoin\Bitcoin;
use BitWasp\Bitcoin\Crypto\EcAdapter\EcSerializer;
use BitWasp\Bitcoin\Crypto\EcAdapter\Serializer\Signature\CompactSignatureSerializerInterface;
use BitWasp\Bitcoin\Crypto\Random\Random;
use BitWasp\Bitcoin\Key\Factory\HierarchicalKeyFactory;
use BitWasp\Bitcoin\Key\Factory\PrivateKeyFactory;
use BitWasp\Bitcoin\MessageSigner\MessageSigner;
use BitWasp\Bitcoin\Mnemonic\Bip39\Bip39Mnemonic;
use BitWasp\Bitcoin\Mnemonic\Bip39\Bip39SeedGenerator;
use BitWasp\Bitcoin\Mnemonic\MnemonicFactory;
use BitWasp\Bitcoin\Network\NetworkFactory;
use BitWasp\Bitcoin\Script\WitnessProgram;
use BitWasp\Bitcoin\Serializer\MessageSigner\SignedMessageSerializer;
use Mdanter\Ecc\Crypto\Key\PrivateKeyInterface;
use Mdanter\Ecc\Crypto\Key\PublicKeyInterface;
use Mdanter\Ecc\EccFactory;
use Mdanter\Ecc\Serializer\PrivateKey\DerPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PrivateKey\PemPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\DerPublicKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\PemPublicKeySerializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Forms\MnemonicForm;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use ZnCore\Domain\Exceptions\UnprocessibleEntityException;
use ZnLib\Web\Symfony4\MicroApp\Interfaces\BuildFormInterface;

//ComposerHelper::requireAssert(EccFactory::class, 'mdanter/ecc');

class BitcoinGenerateBitcoinController extends BaseController
{

    protected $viewsDir = __DIR__ . '/../views/bip39';

    private $privatePemFile = __DIR__ . '/../../../var/ecc/keys/private.pem';
    private $publicPemFile = __DIR__ . '/../../../var/ecc/keys/public.pem';
    private $signatureFile = __DIR__ . '/../../../var/ecc/keys/sig';

    public function __invoke(Request $request): Response
    {
        return $this->generateBitcoin($request);
    }

    public function generateBitcoin(Request $request): Response
    {
        $privFactory = new PrivateKeyFactory();
        $priv = $privFactory->fromWif('Kwoii6A3caGLhVfms1c8KnxnqGVzaZjLJfguDvzJvBiTbzBCHKKB');
        $publicKey = $priv->getPublicKey();
        $pubKeyHash = $publicKey->getPubKeyHash();

### Key hash types
        $this->printHeader("key hash types");
        $p2pkh = new PayToPubKeyHashAddress($pubKeyHash);
        $this->printCode(" * p2pkh address: {$p2pkh->getAddress()}");

        $p2wpkhWP = WitnessProgram::v0($publicKey->getPubKeyHash());
        $p2wpkh = new SegwitAddress($p2wpkhWP);
        $this->printCode(" * v0 key hash address: {$p2wpkh->getAddress()}");

#### Script hash types

        $this->printHeader("script hash types");
// taking an available script to be another addresses redeem script..
        $redeemScript = $p2pkh->getScriptPubKey();

        $p2sh = new ScriptHashAddress($redeemScript->getScriptHash());
        $this->printCode(" * p2sh: {$p2sh->getAddress()}");

        $p2wshWP = WitnessProgram::v0($redeemScript->getWitnessScriptHash());
        $p2wsh = new SegwitAddress($p2wshWP);
        $this->printCode(" * p2wsh: {$p2wsh->getAddress()}");

        $p2shP2wsh = new ScriptHashAddress($p2wshWP->getScript()->getScriptHash());
        $this->printCode(" * p2sh|p2wsh: {$p2shP2wsh->getAddress()}");

        // ---------------- sign -----------------
        $ec = Bitcoin::getEcAdapter();
//        $random = new Random();
//        $privKeyFactory = new PrivateKeyFactory($ec);
//        $privateKey = $privKeyFactory->generateCompressed($random);

        $message = 'hi';

        $signer = new MessageSigner($ec);
        $signed = $signer->sign($message, $priv);
        //dump($priv->getPublicKey()->getPubKeyHash());
        $payToPubKeyHashAddress = new PayToPubKeyHashAddress($priv->getPublicKey()->getPubKeyHash());
//        dd($payToPubKeyHashAddress->getAddress());
        $this->printCode($payToPubKeyHashAddress->getAddress());
        $this->printCode($signed->getBuffer()->getBinary());

//        echo sprintf("Signed by %s\n%s\n", , $signed->getBuffer()->getBinary());


        // ---------------- verify -----------------
        Bitcoin::setNetwork(NetworkFactory::bitcoinTestnet());

//        $address = 'n2Z2DFCxG6vktyX1MFkKAQPQFsrmniGKj5';
        $address = $payToPubKeyHashAddress->getAddress();

        /*$sig = '-----BEGIN BITCOIN SIGNED MESSAGE-----
hi
-----BEGIN SIGNATURE-----
IBpGR29vEbbl4kmpK0fcDsT75GPeH2dg5O199D3iIkS3VcDoQahJMGJEDozXot8JGULWjN9Llq79aF+FogOoz/M=
-----END BITCOIN SIGNED MESSAGE-----';*/
        $sig = $signed->getBuffer()->getBinary();

        $addrCreator = new AddressCreator();
        /** @var PayToPubKeyHashAddress $payToPubKeyHashAddress */
        $payToPubKeyHashAddress = $addrCreator->fromString($address);
        //dd($payToPubKeyHashAddress);

        /** @var CompactSignatureSerializerInterface $compactSigSerializer */
        $compactSigSerializer = EcSerializer::getSerializer(CompactSignatureSerializerInterface::class);
        $serializer = new SignedMessageSerializer($compactSigSerializer);

        $signedMessage = $serializer->parse($sig);
//        dd($signedMessage);
        $signer = new MessageSigner();
        if ($signer->verify($signedMessage, $payToPubKeyHashAddress)) {
            $this->alertSuccess('Signature verified!');
        } else {
            $this->alertDanger('Failed to verify signature!');
        }


        return $this->renderDefault();
    }
}
