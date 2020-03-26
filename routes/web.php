<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::view('/{path?}', 'welcome')
     ->where('path', '.*')
     ->name('react');

     // ok  so path is a ? optional parameter, path reg ex checks and allows all 
     // named path is another reference to the url passed in which can reuse ie if path is /shop/hats then react = /shop/hats route('react')

// Route::get('/', function () {
//     return view('welcome');
// });
//so this just returns the welcome page . the welcome page calls the react component scripts and hydrates all of them there
// ie- example and main are placed into the welcome template-  
// the react component makes the fetch  call to the db  on index  it just fills out all products it may be different if i chose diff url how 
// do i have a diff url for the proper reacat component to call ajax properly and alos get it on the right route here to display
//  wont it be limited to just index how do i call the other methods? 3-22-20