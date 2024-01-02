<?php

/**
 * @var string $content
 * @var $formRender FormRender
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
    <?= $formRender->label('certificateRequest') ?>
    <?= $formRender->input('certificateRequest', 'textarea', [
        'style' => 'font-size: 12px; font-family:monospace;',
        'rows' => '20',
    ]) ?>
    <?= $formRender->hint('certificateRequest') ?>
</div>
<div class="form-group required has-error">
    <?= $formRender->label('expiredAt') ?>
    <?= $formRender->input('expiredAt', 'text') ?>
    <?= $formRender->hint('expiredAt') ?>
</div>

<div class="form-group">
    <?= $formRender->input('save', 'submit') ?>
</div>

<?= $formRender->endFrom() ?>

<?= $content ?>
