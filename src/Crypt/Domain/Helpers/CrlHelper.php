<?php


namespace Untek\Sandbox\Crypt\Crypt\Domain\Helpers;

use FG\ASN1\Identifier;
use FG\ASN1\TemplateParser;

/**
 * Списки отозванных сертификатов (Certificate Revocation List, CRL)
 *
 * Это список сертификатов, которые удостоверяющий центр пометил как отозванные.
 * Списки отозванных сертификатов применяются для того, чтобы установить,
 * был ли сертификат пользователя или удостоверяющего центра отозван в связи с компрометацией ключей.
 * Важное свойство CRL — он содержит информацию только о сертификатах, срок действия которых не истёк.
 */
class CrlHelper
{

    public static function parse(string $binary)
    {
        $template = [
            Identifier::SEQUENCE => [
                Identifier::SEQUENCE => [
                    Identifier::INTEGER,
                    Identifier::SEQUENCE => [
                        Identifier::OBJECT_IDENTIFIER,
                        Identifier::NULL,
                    ]
                ]
            ]
        ];

        $parser = new TemplateParser();
        $object = $parser->parseBinary($binary, $template);
        $arr = [];

        foreach ($object->getChildren() as $child) {
            foreach ($child as $key => $obj) {

                //$key==4 действителен до
                if ($key == 3) { // действителен с
                    //dd($obj->getContent()->format('Y-m-d\TH:i:s.u'));
//                    echo $obj->getContent()->format('Y-m-d\TH:i:s.u');
//                    echo '<hr>';
                } elseif ($key == 5) { // список отозванных сертификатов
                    foreach ($obj->getChildren() as $cert) {
                        $integer = $cert[0]->getContent();
                        $hex = my_base_convert($integer, 10, 16);
                        $arr[] = [
                            'key' => $hex,
                            'date' => $cert[1]->getContent(),
                        ];
                        //dd($cert);
                        //echo bcdechex($cert[0]->getContent())."<br>";
                    }
                }
            }
        }
        return $arr;
    }
}

/*function bcdechex($dec)
{
    $last = bcmod($dec, 16);
    $remain = bcdiv(bcsub($dec, $last), 16);
    if ($remain == 0) {
        return dechex($last);
    } else {
        return \Untek\Sandbox\Crypt\Crypt\Controllers\bcdechex($remain) . dechex($last);
    }
}*/

function my_base_convert($numstring, $frombase, $tobase, $chars = null)
{
    $chars = $chars ?? "0123456789abcdefghijklmnopqrstuvwxyz";
    $tostring = substr($chars, 0, $tobase);

    $length = strlen($numstring);
    $result = '';
    for ($i = 0; $i < $length; $i++) {
        $number[$i] = strpos($chars, $numstring[$i]);
    }
    do {
        $divide = 0;
        $newlen = 0;
        for ($i = 0; $i < $length; $i++) {
            $divide = $divide * $frombase + $number[$i];
            if ($divide >= $tobase) {
                $number[$newlen++] = (int)($divide / $tobase);
                $divide = $divide % $tobase;
            } elseif ($newlen > 0) {
                $number[$newlen++] = 0;
            }
        }
        $length = $newlen;
        $result = $tostring[$divide] . $result;
    } while ($newlen != 0);
    return $result;
}