<?php

/**
 * @var array $menu
 * @var View $this
 * @var array $model
 */

use Untek\Lib\Web\View\Libs\View;

?>

<form id="w0" method="post" enctype="multipart/form-data">
    <div class="form-group">
        <div class="custom-file">
            <input type="file" name="file" id="entity-imagefile" class="custom-file-input file-uploader">
            <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
    </div>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Пример текстового поля</label>
        <textarea name="xml" class="form-control" id="exampleFormControlTextarea1"
                  rows="3"><?= $model['xml'] ?? '' ?></textarea>
    </div>
    <button type="submit" class="btn btn-success">Сохранить</button>
</form>

<br/>

<?= $content ?>
