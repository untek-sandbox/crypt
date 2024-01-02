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

<div class="form-group">
    <?= $formRender->input('save', 'submit') ?>
</div>

<?= $formRender->endFrom() ?>

<?= $content ?>
