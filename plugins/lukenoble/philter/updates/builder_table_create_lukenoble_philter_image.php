<?php namespace lukenoble\Philter\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateLukenoblePhilterImage extends Migration
{
    public function up()
    {
        Schema::create('lukenoble_philter_image', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('id')->unsigned();
            $table->text('name');
            $table->text('description')->nullable();
            $table->integer('user_id');
            $table->string('filter', 191);
            $table->date('created_at')->nullable();
            $table->primary(['id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('lukenoble_philter_image');
    }
}
