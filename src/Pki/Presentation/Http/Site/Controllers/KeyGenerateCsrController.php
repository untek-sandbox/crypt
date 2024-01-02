<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Behat\Transliterator\Transliterator;
use Faker\Generator;
use Faker\Provider\ru_RU\Person;
use Untek\Sandbox\Crypt\Crypt\Domain\Helpers\PkiHelper;
use Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms\CertificateRequestForm;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Core\Arr\Helpers\ArrayHelper;
use Untek\Core\Text\Helpers\Inflector;
use Untek\Core\Text\Libs\RandomString;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\KeyLoaders\DirectoryKeyLoader;
use Untek\Kaz\Iin\Domain\Entities\DateEntity;
use Untek\Kaz\Iin\Domain\Entities\IndividualEntity;
use Untek\Kaz\Iin\Domain\Exceptions\CheckSumGenerateException;
use Untek\Kaz\Iin\Domain\Helpers\CenturyHelper;
use Untek\Kaz\Iin\Domain\Helpers\IinHelper;
use Untek\Model\Validator\Exceptions\UnprocessableEntityException;

class KeyGenerateCsrController extends BaseController
{

    private $keyLoader;

    public function __construct()
    {
        parent::__construct();
        $this->keyLoader = new DirectoryKeyLoader();
        $this->keyLoader->setDirectory($this->pkiDirectory);
    }

    public function __invoke(Request $request): Response
    {
        $sex = mt_rand(0, 1) ? 'male' : 'female';
        $nationality = mt_rand(0, 1) ? 'ru' : 'kz';

        $faker = new Generator();
        $addressProvider = new \Faker\Provider\kk_KZ\Address($faker);
        $city = Transliterator::transliterate($addressProvider->city(), '-');
        $city = Inflector::titleize($city);

        if ($nationality == 'kz') {
            $personProvider = new \Faker\Provider\kk_KZ\Person($faker);
            $faker->addProvider($personProvider);
        } else {
            $personProvider = new Person($faker);
            $faker->addProvider($personProvider);
        }

        $form = new CertificateRequestForm();
        $form->setName($personProvider->firstName($sex));
        $form->setSurname($personProvider->lastName($sex));
        if (method_exists($personProvider, 'middleName')) {
            $form->setGivenName($personProvider->middleName($sex));
        }
        $form->setIin($this->generateIin($sex));
        $form->setCountryName('KZ');
        $form->setStateOrProvinceName($city);
        $form->setOrganizationName('KAZAKHSTAN');

        $subjectKeyEntity = $this->keyLoader->load('user');

        $buildForm = $this->formManager->buildForm($form, $request);

        if (!$buildForm->isSubmitted() && $subjectKeyEntity->getCsr()) {
            $this->alertWarning('CSR found <a class="btn btn-warning" href="/sandbox/pki/key-remove-user-key">Remove</a>');
            $this->printKey($subjectKeyEntity);
        }
        if ($buildForm->isSubmitted() && $buildForm->isValid()) {
            try {
                $dn = [
                    'commonName' => $form->getSurname() . ' ' . $form->getName(),
                    'surname' => $form->getSurname(),
                    'serialNumber' => 'IIN' . $form->getIin(),
                    'countryName' => $form->getCountryName(),
                    'givenName' => $form->getGivenName(),
                    'stateOrProvinceName' => $form->getStateOrProvinceName(),
                    'organizationName' => $form->getOrganizationName(),
                ];

                $dn = ArrayHelper::removeEmptyItems($dn);

                $random = new RandomString();
                $random->addCharactersAll();
                $random->setLength(16);
                $privateKeyUserPassword = $random->generateString();

                $extraAttributes = [
                    //'ddd' => '2222222222222222222222222222',
                ];
                $subjectKeyEntity = PkiHelper::generateUserCsr($dn, $extraAttributes, $privateKeyUserPassword);
                $subjectKeyEntity->setPrivateKeyPassword($privateKeyUserPassword);

                $this->keyLoader->remove('user');
                $this->keyLoader->save('user', $subjectKeyEntity);

                $this->alertSuccess('CSR created!');

                $this->printKey($subjectKeyEntity);
            } catch (UnprocessableEntityException $e) {
                $this->formManager->setUnprocessableErrorsToForm($buildForm, $e);
            }
        }

        return $this->renderFile(__DIR__ . '/../../../../resources/templates/key/create-certificate-request.php', [
            'formRender' => $this->formManager->createFormRender($buildForm),
        ]);
    }

    protected function generateIin(string $sex): string
    {
        $birthdayEntity = new DateEntity();
        $birthdayEntity->setEpoch(1900);
        $birthdayEntity->setDecade(mt_rand(50, 99));
        $birthdayEntity->setMonth(mt_rand(1, 12));
        $birthdayEntity->setDay(mt_rand(1, 28));
        $iinEntity = new IndividualEntity();
        $iinEntity->setBirthday($birthdayEntity);
        $iinEntity->setSerialNumber(mt_rand(0, 9999));
        $century = CenturyHelper::forgeCentury($sex, $birthdayEntity->getEpoch() / 100);
        $iinEntity->setCentury($century);
        $iinEntity->setSex($sex);

        $error = true;
        while ($error) {
            try {
                $iin = IinHelper::entityToString($iinEntity);
                $error = false;
            } catch (CheckSumGenerateException $e) {
                $serialNumber = $iinEntity->getSerialNumber();
                if ($serialNumber == 9999) {
                    $serialNumber = 1;
                } else {
                    $serialNumber++;
                }
                $iinEntity->setSerialNumber($serialNumber);
            }
        }
        return $iin;
    }
}
