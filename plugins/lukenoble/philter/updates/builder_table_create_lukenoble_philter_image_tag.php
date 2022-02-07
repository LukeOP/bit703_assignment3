<?php namespace lukenoble\Philter\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateLukenoblePhilterImageTag extends Migration
{
    public function up()
    {
        Schema::create('lukenoble_philter_image_tag', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('image_id');
            $table->integer('tag_id');
            $table->primary(['image_id','tag_id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('lukenoble_philter_image_tag');
    }
}
