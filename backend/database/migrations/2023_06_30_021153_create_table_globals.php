<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableGlobals extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_globals', function (Blueprint $table) {
            $table->id();
            $table->string('logo');
            $table->json('slider');
            $table->string('address');
            $table->string('phone');
            $table->string('email');
            $table->string('facebook');
            $table->string('instagram');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_globals');
    }
}
