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
    <?= $formRender->label('surname') ?>
    <?= $formRender->input('surname', 'text') ?>
    <?= $formRender->hint('surname') ?>
</div>
<div class="form-group field-form-login required has-error">
    <?= $formRender->label('name') ?>
    <?= $formRender->input('name', 'text') ?>
    <?= $formRender->hint('name') ?>
</div>
<div class="form-group field-form-login required has-error">
    <?= $formRender->label('givenName') ?>
    <?= $formRender->input('givenName', 'text') ?>
    <?= $formRender->hint('givenName') ?>
</div>
<div class="form-group field-form-login required has-error">
    <?= $formRender->label('iin') ?>
    <?= $formRender->input('iin', 'text') ?>
    <?= $formRender->hint('iin') ?>
</div>
<div class="form-group field-form-login required has-error">
    <?= $formRender->label('countryName') ?>
    <?= $formRender->input('countryName', 'text') ?>
    <?= $formRender->hint('countryName') ?>
</div>
<div class="form-group field-form-login required has-error">
    <?= $formRender->label('stateOrProvinceName') ?>
    <?= $formRender->input('stateOrProvinceName', 'text') ?>
    <?= $formRender->hint('stateOrProvinceName') ?>
</div>
<div class="form-group field-form-login required has-error">
    <?= $formRender->label('organizationName') ?>
    <?= $formRender->input('organizationName', 'text') ?>
    <?= $formRender->hint('organizationName') ?>
</div>

<div class="form-group">
    <?= $formRender->input('save', 'submit') ?>
</div>

<?= $formRender->endFrom() ?>

<?= $content ?>
