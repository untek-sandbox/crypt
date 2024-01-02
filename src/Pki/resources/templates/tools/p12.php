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
    <?= $formRender->label('file') ?>
    <?= $formRender->input('file') ?>
    <?= $formRender->hint('file') ?>
</div>
<div class="form-group required has-error">
    <?= $formRender->label('password') ?>
    <?= $formRender->input('password') ?>
    <?= $formRender->hint('password') ?>
</div>

<div class="form-group">
    <?= $formRender->input('save', 'submit') ?>
</div>

<?= $formRender->endFrom() ?>

<?= $content ?>
