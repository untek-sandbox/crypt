<?php

namespace Untek\Sandbox\Crypt\Crypt\Domain\Helpers;

use phpseclib\Crypt\RSA;
use phpseclib\File\X509;
use ZnCore\Base\Legacy\Yii\Helpers\ArrayHelper;
use Untek\Crypt\Pki\XmlDSig\Domain\Entities\KeyEntity;

class PkiHelper
{

    /*public static function newCSR(array $dn, string $privateKeyUserPassword = null)
    {
        $privateKeyUserResource = self::createPrivateKey(2048);

        $rsa = new RSA();
        $x509 = new X509();

        openssl_pkey_export($privateKeyUserResource, $privateKeyPem, $privateKeyUserPassword);

        $rsa->loadKey($privateKeyPem);
        $rsa->setPassword($privateKeyUserPassword);
        $x509->setPrivateKey($rsa);
        $x509->setDN($dn);
//        dd($x509->signCSR('sha256WithRSAEncryption'));
        $csrPem = $x509->saveCSR($x509->signCSR('sha256WithRSAEncryption'), X509::FORMAT_PEM);
        dd($csrPem);
    }*/

    public static function generatePrivateKey($privateKeyUserResource, string $privateKeyUserPassword = null): KeyEntity
    {
        openssl_pkey_export($privateKeyUserResource, $privateKeyPem, $privateKeyUserPassword);
        $key = openssl_pkey_get_details($privateKeyUserResource);
        $publicKeyPem = $key['key'];
        $keyEntity = new KeyEntity();
        $keyEntity->setPrivateKey($privateKeyPem);
        $keyEntity->setPublicKey($publicKeyPem);
        return $keyEntity;
    }

    public static function generateUserCsr(array $dn, array $extraAttributes = [], string $privateKeyUserPassword = null): KeyEntity
    {
        $privateKeyUserResource = self::createPrivateKey(2048);
        $keyEntity = self::generatePrivateKey($privateKeyUserResource, $privateKeyUserPassword);

        // Generate a certificate signing request
        $csrResource = openssl_csr_new($dn, $privateKeyUserResource, [
            'digest_alg' => 'sha256',
        ]);
        // Save your private key, CSR and self-signed cert for later use
        openssl_csr_export($csrResource, $csrPem);
        // Show any errors that occurred here
        self::gerOpenSslErrors();
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

    private static function gerOpenSslErrors(): array
    {
        $errors = [];
        while (($e = openssl_error_string()) !== false) {
            $errors[] = $e;
        }
        return $errors;
    }

    private static function createPrivateKey(int $bits = 2048)
    {
        $keyGenerator = new RSA();
        $newKeys = $keyGenerator->createKey($bits);
        $privateKeyResource = openssl_pkey_get_private($newKeys['privatekey']);
        return $privateKeyResource;
    }
}
