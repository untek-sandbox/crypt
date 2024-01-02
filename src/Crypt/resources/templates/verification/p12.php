<?php

/**
 * @var array $menu
 * @var View $this
 */

use Untek\Lib\Web\View\Libs\View;

?>

<form id="w0" method="post" enctype="multipart/form-data">

    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="entity-title">Password</label>
            <input type="password" id="entity-title" class="form-control" name="password">
        </div>
    </div>

    <div class="form-group">
        <div class="custom-file">
            <input type="file" name="file" id="entity-imagefile" class="custom-file-input file-uploader">
            <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
    </div>
    <button type="submit" class="btn btn-success">Сохранить</button>
</form>

<br/>

<?= $content ?>
