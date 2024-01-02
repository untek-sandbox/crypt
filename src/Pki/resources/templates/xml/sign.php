<?php

/**
 * @var $formRender FormRender
 * @var string $content
 */

use Untek\Component\Web\Form\Libs\FormRender;

?>

<?= $formRender->errors() ?>

<?= $formRender->beginFrom() ?>

<div class="form-group required has-error">
    <?= $formRender->label('issuerKey') ?>
    <?= $formRender->input('issuerKey', 'select') ?>
    <?= $formRender->hint('issuerKey') ?>
</div>
<div class="form-group required has-error">
    <?= $formRender->label('subjectKey') ?>
    <?= $formRender->input('subjectKey', 'select') ?>
    <?= $formRender->hint('subjectKey') ?>
</div>
<div class="form-group required has-error">
    <?= $formRender->label('sourceXml') ?>
    <?= $formRender->input('sourceXml', 'textarea', [
        'style' => 'font-size: 12px; font-family:monospace;',
        'rows' => '20',
    ]) ?>
    <?= $formRender->hint('sourceXml') ?>
</div>
<div class="form-group required has-error">
    <?= $formRender->input('verifyCertificateSignature') ?>
    <?= $formRender->label('verifyCertificateSignature') ?>
    <?= $formRender->hint('verifyCertificateSignature') ?>
</div>

<div class="form-group required has-error">
    <?= $formRender->input('verifyCertificateDate') ?>
    <?= $formRender->label('verifyCertificateDate') ?>
    <?= $formRender->hint('verifyCertificateDate') ?>
</div>

<div class="form-group">
    <?= $formRender->input('save', 'submit') ?>
</div>

<?= $formRender->endFrom() ?>

<?= $content ?>
