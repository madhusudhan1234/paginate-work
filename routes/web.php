<?php


Route::get('user/api',[
	'as' => 'user.api',
	'uses' => 'API\UserApiController@index'
]);

Route::get('users',[
	'as' => 'users',
	'uses' => 'UserController@index'
]);