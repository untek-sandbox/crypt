<?php

/**
 * @var string $content
 */

?>

<?= $formRender->errors() ?>

<?= $formRender->beginFrom() ?>

<div class="form-group field-form-login required has-error">
    <?= $formRender->label('value') ?>
    <?= $formRender->input('value') ?>
    <?= $formRender->hint('value') ?>
</div>

<div class="form-group field-form-login required has-error">
    <?= $formRender->label('password') ?>
    <?= $formRender->input('password') ?>
    <?= $formRender->hint('password') ?>
</div>
<div class="form-group">
    <?= $formRender->input('save', 'submit') ?>
    <?= $formRender->input('generate', 'submit') ?>
</div>

<?= $formRender->endFrom() ?>

<?= $content ?>
