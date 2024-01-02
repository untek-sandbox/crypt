<?php

namespace Untek\Sandbox\Crypt\Crypt\Domain\Helpers;

use phpseclib\Crypt\RSA;
use phpseclib\File\X509;
use Untek\Crypt\Pki\XmlDSig\Domain\Entities\KeyEntity;

class EgovGeneratorHelper
{

    /*private static $configFile = __DIR__ . '/openssl.cnf';

    private static function createPrivateKeyNative(int $bits) {
        if (!defined('CRYPT_RSA_EXPONENT')) {
            // http://en.wikipedia.org/wiki/65537_%28number%29
            define('CRYPT_RSA_EXPONENT', '65537');
        }
        // per <http://cseweb.ucsd.edu/~hovav/dist/survey.pdf#page=5>, this number ought not result in primes smaller
        // than 256 bits. as a consequence if the key you're trying to create is 1024 bits and you've set CRYPT_RSA_SMALLEST_PRIME
        // to 384 bits then you're going to get a 384 bit prime and a 640 bit prime (384 + 1024 % 384). at least if
        // CRYPT_RSA_MODE is set to self::MODE_INTERNAL. if CRYPT_RSA_MODE is set to self::MODE_OPENSSL then
        // CRYPT_RSA_SMALLEST_PRIME is ignored (ie. multi-prime RSA support is more intended as a way to speed up RSA key
        // generation when there's a chance neither gmp nor OpenSSL are installed)
        if (!defined('CRYPT_RSA_SMALLEST_PRIME')) {
            define('CRYPT_RSA_SMALLEST_PRIME', 4096);
        }

        $config = [
            "private_key_bits" => $bits,
            "private_key_type" => OPENSSL_KEYTYPE_RSA,
        ];
        if (isset(self::$configFile)) {
            $config['config'] = self::$configFile;
        }

        $privateKeyResource = openssl_pkey_new($config);
        return $privateKeyResource;
    }*/

    private static function createPrivateKey(int $bits = 2048) {
        /*$privateKeyResource = openssl_pkey_new(array(
            "private_key_bits" => 2048,
            "private_key_type" => OPENSSL_KEYTYPE_RSA,
        ));*/
//        $privateKeyResource = self::createPrivateKeyNative($bits);

        $keyGenerator = new RSA();
        $newKeys = $keyGenerator->createKey($bits);
        $privateKeyResource = openssl_pkey_get_private($newKeys['privatekey']);
        return $privateKeyResource;
    }

    public static function generateCa2(string $privateKeyPassword): KeyEntity
    {
        $dn = array(
            "countryName" => "KZ",
            "commonName" => "ҰЛТТЫҚ КУӘЛАНДЫРУШЫ ОРТАЛЫҚ TEST (RSA)",
        );

        // Generate a new private (and public) key pair
        $privateKeyResource = self::createPrivateKey(2048);

        // Generate a certificate signing request
        $csrResource = openssl_csr_new($dn, $privateKeyResource, array('digest_alg' => 'sha256'));

        // Generate a self-signed cert, valid for 365 days
        $certificateResource = openssl_csr_sign($csrResource, null, $privateKeyResource, $days = 365 * 10, array('digest_alg' => 'sha256'), 1234567890);

        // Save your private key, CSR and self-signed cert for later use
        openssl_csr_export($csrResource, $csrPem);
        openssl_x509_export($certificateResource, $certificatePem);
        openssl_pkey_export($privateKeyResource, $privateKeyPem, $privateKeyPassword);

        $key = openssl_pkey_get_details($privateKeyResource);
        $publicKeyPem = $key['key'];

        openssl_pkcs12_export($certificateResource, $p12, $privateKeyResource, $privateKeyPassword);
//        $privateKeyPem = $privateKey->getPrivateKey(RSA::PRIVATE_FORMAT_PKCS8);

        // Show any errors that occurred here
        $errors = [];
        while (($e = openssl_error_string()) !== false) {
            if($e != 'error:0E06D06C:configuration file routines:NCONF_get_string:no value') {
                $errors[] = $e;
            }
        }

        if(!empty($errors)) {
            throw new \Exception(implode(PHP_EOL, $errors));
        }

        $keyEntity = new KeyEntity();
        $keyEntity->setCertificate($certificatePem);
        $keyEntity->setCsr($csrPem);
        $keyEntity->setPrivateKey($privateKeyPem);
        $keyEntity->setPublicKey($publicKeyPem);
        $keyEntity->setP12($p12);
        return $keyEntity;
    }

    public static function generateUserCsr($privateKeyUserPassword) {
        $dn = array(
            "commonName" => "ПЕТРОВ ИВАН",
            "surname" => "ПЕТРОВ",
            "serialNumber" => "IIN851115350248",
            "countryName" => "KZ",
            "givenName" => "ВАСИЛЬЕВИЧ",
        );

        $privateKeyUserResource = self::createPrivateKey(2048);

        // Generate a certificate signing request
        $csrResource = openssl_csr_new($dn, $privateKeyUserResource, array('digest_alg' => 'sha256'));

        //openssl_csr_export($csrResource, $csrPem);exit($csrPem);

        // Generate a self-signed cert, valid for 365 days
//        $certificateResource = openssl_csr_sign($csrResource, $caCert, $privateKeyRootCaResource, $days = 365 * 10, array('digest_alg' => 'sha256'), 1234567890);

        // Save your private key, CSR and self-signed cert for later use
        openssl_csr_export($csrResource, $csrPem);
//        openssl_x509_export($certificateResource, $certificatePem);
        openssl_pkey_export($privateKeyUserResource, $privateKeyPem, $privateKeyUserPassword);

        $key = openssl_pkey_get_details($privateKeyUserResource);
        $publicKeyPem = $key['key'];

//        openssl_pkcs12_export($certificateResource, $p12, $privateKeyUserResource, $privateKeyUserPassword);

        // Show any errors that occurred here
        $errors = [];
        while (($e = openssl_error_string()) !== false) {
            $errors[] = $e;
        }

        $keyEntity = new KeyEntity();
//        $keyEntity->setCertificate($certificatePem);
        //$keyEntity->setCertificateRequest($csrPem);
        $keyEntity->setPrivateKey($privateKeyPem);
        $keyEntity->setPublicKey($publicKeyPem);
//        $keyEntity->setP12($p12);
        $keyEntity->setCsr($csrPem);
        return $keyEntity;
    }



    public static function signUserCsr(KeyEntity $caKeyEntity, KeyEntity $userKeyEntity) {

        //$userKeyEntity = EgovGeneratorHelper::generateUser2($caKeyEntity->getCertificate(), openssl_pkey_get_private($caKeyEntity->getPrivateKey()), $caKeyEntity->getPrivateKeyPassword());

        //dd($userKeyEntity);

        //$privateKeyRootCaResource = [$caKeyEntity->getPrivateKey(), $caKeyEntity->getPrivateKeyPassword()];
        $privateKeyRootCaResource = openssl_pkey_get_private($caKeyEntity->getPrivateKey(), $caKeyEntity->getPrivateKeyPassword());

       // dd($userKeyEntity->getCertificateRequest());

        // Generate a self-signed cert, valid for 365 days
        $certificateResource = openssl_csr_sign($userKeyEntity->getCertificateRequest(), $caKeyEntity->getCertificate(), $privateKeyRootCaResource, $days = 365 * 10, array('digest_alg' => 'sha256'), 1234567890);

        $privateKeyUserResource = openssl_pkey_get_private($userKeyEntity->getPrivateKey(), $userKeyEntity->getPrivateKeyPassword());

        // Save your private key, CSR and self-signed cert for later use
        //openssl_csr_export($csrResource, $csrPem);
        openssl_x509_export($certificateResource, $certificatePem);
        //openssl_pkey_export($privateKeyUserResource, $privateKeyPem, $privateKeyUserPassword);

        //$key = openssl_pkey_get_details($privateKeyUserResource);
        //$publicKeyPem = $key['key'];

        openssl_pkcs12_export($certificateResource, $p12, $privateKeyUserResource, $userKeyEntity->getPrivateKeyPassword());

        // Show any errors that occurred here
        $errors = [];
        while (($e = openssl_error_string()) !== false) {
            $errors[] = $e;
        }

        $userKeyEntity->setCertificate($certificatePem);
        $userKeyEntity->setP12($p12);
//        $keyEntity->setCsr($csrPem);
        return $userKeyEntity;
    }

    public static function generateUser2($caCert, $privateKeyRootCaResource, $privateKeyUserPassword): KeyEntity
    {
        $dn = array(
            "commonName" => "ПЕТРОВ ИВАН",
            "surname" => "ПЕТРОВ",
            "serialNumber" => "IIN851115350248",
            "countryName" => "KZ",
            "givenName" => "ВАСИЛЬЕВИЧ",
        );

        $privateKeyUserResource = self::createPrivateKey(2048);

        // Generate a certificate signing request
        $csrResource = openssl_csr_new($dn, $privateKeyUserResource, array('digest_alg' => 'sha256'));

        //openssl_csr_export($csrResource, $csrPem);exit($csrPem);

        // Generate a self-signed cert, valid for 365 days
        $certificateResource = openssl_csr_sign($csrResource, $caCert, $privateKeyRootCaResource, $days = 365 * 10, array('digest_alg' => 'sha256'), 1234567890);

        // Save your private key, CSR and self-signed cert for later use
        openssl_csr_export($csrResource, $csrPem);
        openssl_x509_export($certificateResource, $certificatePem);
        openssl_pkey_export($privateKeyUserResource, $privateKeyPem, $privateKeyUserPassword);

        $key = openssl_pkey_get_details($privateKeyUserResource);
        $publicKeyPem = $key['key'];

        openssl_pkcs12_export($certificateResource, $p12, $privateKeyUserResource, $privateKeyUserPassword);

        // Show any errors that occurred here
        $errors = [];
        while (($e = openssl_error_string()) !== false) {
            $errors[] = $e;
        }

        $keyEntity = new KeyEntity();
        $keyEntity->setCertificate($certificatePem);
        //$keyEntity->setCertificateRequest($csrPem);
        $keyEntity->setPrivateKey($privateKeyPem);
        $keyEntity->setPublicKey($publicKeyPem);
        $keyEntity->setP12($p12);
        $keyEntity->setCsr($csrPem);
        return $keyEntity;
    }

}
