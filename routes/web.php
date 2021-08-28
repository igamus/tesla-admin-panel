<?php

use Illuminate\Support\Facades\Route;
Use App\Http\Controllers\Auth\LoginController;

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

Route::group(['prefix' => 'admin'], function () {
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
});

// Auth::routes();

Route::get('/admin/{any?}', function () {
    return view('welcome');
})->middleware('auth');

// Route::fallback(function(){ return response()->view('welcome'); });

Route::get('{any?}', function () {
    return view('welcome');
});
//->where('any', '.*');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
