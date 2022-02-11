<?php

namespace lukenoble\Philter;

use Route;



/**
 * Class to filer requests to the required methods.
 */
$api = new Classes\Api();



Route::post('/account', function () use ($api) {
    return $api->login();
});

Route::post('api/v1/users/', function () use ($api) {
    return $api->registerUser();
});

Route::get('api/v1/logout', function () use ($api) {
    return $api->logOut();
});

Route::get('api/v1/users', function () use ($api) {
    return $api->getUser();
});

Route::post('api/v1/users/update', function () use ($api) {
    return $api->updateUser();
});

Route::post('api/v1/users/delete', function () use ($api) {
    return $api->deleteUser();
});

//TODO Image 1. What should the URL be?
Route::get('api/v1/images', function () use ($api) {
    return $api->getImages();
});

//TODO Image 3. add code to capture the image_id
Route::get('api/v1/images/', function ($image_id) use ($api) {
    return $api->getImage($image_id);
});

Route::get('api/v1/images/user', function () use ($api) {
    return $api->getUserImages();
});

Route::post('api/v1/images', function () use ($api) {
    return $api->addImage();
});

//TODO Image 4. match the correct HTTP request type
Route::put('api/v1/images/update/{image_id}', function ($image_id) use ($api) {
    return $api->updateImage($image_id);
});

Route::get('api/v1/users/delete/{image_id}', function ($image_id) use ($api) {
    return $api->deleteImage($image_id);
});
