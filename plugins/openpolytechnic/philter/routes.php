<?php

/**
 * Class to filer requests to the required methods.
 */
$api = new Openpolytechnic\Philter\Classes\Api();

Route::options('api/v1/{all}', function() {
    if (Request::getMethod() == "OPTIONS") {
        echo('You are connected to the API');
        die();
    }
});

Route::options('api/v1/{any}/{all}', function() {
    if (Request::getMethod() == "OPTIONS") {
        echo('You are connected to the API');
        die();
    }
});

/***** YOU NEED TO IMPLEMENT THE MISSING ROUTES *****/
