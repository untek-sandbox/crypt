<?php

/**
 * @var string $content
 * @var $formRender FormRender
 */

use Untek\Component\Web\Form\Libs\FormRender;

?>

<?= $formRender->errors() ?>

<?= $formRender->beginFrom() ?>

<div class="form-group field-form-login required has-error">
    <?= $formRender->label('value') ?>
    <?= $formRender->input('value', 'text') ?>
    <?= $formRender->hint('value') ?>
</div>
<div class="form-group">
    <?= $formRender->input('save', 'submit') ?>
</div>

<?= $formRender->endFrom() ?>

<?= $content ?>
