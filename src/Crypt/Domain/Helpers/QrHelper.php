<?php

namespace Untek\Sandbox\Crypt\Crypt\Domain\Helpers;

use Illuminate\Support\Collection;
use Untek\Component\Web\Html\Helpers\HtmlHelper;
use Untek\Lib\QrBox\Entities\FileEntity;

class QrHelper
{

    public static function print($qrCollection): string
    {
        $content = '';
        $content .= '<div style="align-content: center; text-align: center">';
        foreach ($qrCollection as $fileEntity) {
            $content .= '<br/>';
            $content .= self::printItem($fileEntity);
        }
        $content .= '</div>';
        return $content;
    }

    private static function printItem(FileEntity $fileEntity): string
    {
        $content = '';
        $mimeType = $fileEntity->getMimeType();
        if ($mimeType == 'text/plain') {
            $content .= "<pre style='margin: 0; padding: 0;'>{$fileEntity->getContent()}</pre>";
        } else {
            $base64Data = HtmlHelper::generateBase64Content($fileEntity->getContent(), $mimeType);
            $content .= "<img alt='' src='$base64Data' />";
        }
        return $content;
    }
}
