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

class BitcoinGenerateBip39Controller extends BaseController
{

    protected $viewsDir = __DIR__ . '/../views/bip39';

    private $privatePemFile = __DIR__ . '/../../../var/ecc/keys/private.pem';
    private $publicPemFile = __DIR__ . '/../../../var/ecc/keys/public.pem';
    private $signatureFile = __DIR__ . '/../../../var/ecc/keys/sig';

    public function __invoke(Request $request): Response
    {
        return $this->generateBip39($request);
    }

    public function generateBip39(Request $request): Response
    {
        $form = new MnemonicForm();
        $buildForm = $this->formManager->buildForm($form, $request);
        if ($buildForm->isSubmitted() && $buildForm->isValid()) {
            try {
                $clickedButton = $buildForm->getClickedButton()->getConfig()->getName();
                if ($clickedButton == 'generate') {
                    $random = new Random();
                    $entropy = $random->bytes(Bip39Mnemonic::MAX_ENTROPY_BYTE_LEN);
                    $bip39 = MnemonicFactory::bip39();
                    $mnemonic = $bip39->entropyToMnemonic($entropy);
                    $buildForm->getData()->setValue($mnemonic);
                    $this->alertInfo($mnemonic);
                }
                if ($clickedButton == 'save') {
                    $mnemonic = $form->getValue();
                }

                $seedGenerator = new Bip39SeedGenerator();
                $seed = $seedGenerator->getSeed($mnemonic, $form->getPassword() ?? '');
                $this->printHeader('BIP39 Seed');
                $this->printCode($seed->getHex());

                $hdFactory = new HierarchicalKeyFactory();
                $master = $hdFactory->fromEntropy($seed);

                $network = Bitcoin::getNetwork();

// To restore from an existing xprv/xpub:
//$master = $hdFactory->fromExtended("xprv9s21ZrQH143K4Se1mR27QkNkLS9LSarRVFQcopi2mcomwNPDaABdM1gjyow2VgrVGSYReepENPKX2qiH61CbixpYuSg4fFgmrRtk6TufhPU");

                $this->printHeader('BIP32 Root Key / Master key (m)');
                $this->printCode($master->toExtendedPrivateKey($network));

                $masterAddr = new PayToPubKeyHashAddress($master->getPublicKey()->getPubKeyHash());
                $this->printHeader('Address');
                $this->printCode($masterAddr->getAddress());

                $this->printHeader('UNHARDENED PATH');

                echo "\n";
                echo "Derive sequential keys:\n";

                /*for($i = 0; $i > 5; $i++) {

                }*/

                $key1 = $master->deriveChild(0);
                echo " - m/0 " . $key1->toExtendedPrivateKey($network) . "\n";

                $child1 = new PayToPubKeyHashAddress($key1->getPublicKey()->getPubKeyHash());
                echo "   Address: " . $child1->getAddress() . "\n\n";

                $key2 = $key1->deriveChild(999999);
                echo " - m/0/999999 " . $key2->toExtendedPublicKey($network) . "\n";


                $child2 = new PayToPubKeyHashAddress($key2->getPublicKey()->getPubKeyHash());
                echo "   Address: " . $child2->getAddress() . "\n\n";

                echo "Directly derive path\n";

                $sameKey2 = $master->derivePath("0/999999");
                echo " - m/0/999999 " . $sameKey2->toExtendedPublicKey() . "\n";

                $child3 = new PayToPubKeyHashAddress($sameKey2->getPublicKey()->getPubKeyHash());
                echo "   Address: " . $child3->getAddress() . "\n\n";

                echo "HARDENED PATH\n";
                $hardened2 = $master->derivePath("0/999999'");

                $child4 = new PayToPubKeyHashAddress($hardened2->getPublicKey()->getPubKeyHash());
                echo " - m/0/999999' " . $hardened2->toExtendedPublicKey() . "\n";
                echo "   Address: " . $child4->getAddress() . "\n\n";

                $this->printCode(ob_get_clean());

            } catch (UnprocessibleEntityException $e) {
                $this->setUnprocessableErrorsToForm($buildForm, $e);
            }
        }

        return $this->render(__DIR__ . '/../../../../resources/templates/bip39/index.php', [
            'formRender' => $this->formManager->createFormRender($buildForm),
        ]);
    }
}
