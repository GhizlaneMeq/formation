<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CourController;
use App\Http\Controllers\isAdmin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';




Route::get('/hhh', function () {
    return Inertia::render('Auth/Login&SignUp');
});

Route::get('/ali', function () {
    return Inertia::render('Cours/Cours');
})->name('hhh')->middleware(['auth']);

// Route::get('/nav', function () {
//     return Inertia::render('Navbar/Navbar');
// });

// Route::get('/hhh', [isAdmin::class ,'index'])->middleware(['auth' , 'isadmin']) ;

Route::get('/NewCours', function () {
    return Inertia::render('newCours/newCours');

})->name('NewCours')->middleware(['auth']);


Route::post('/submitCours',[CourController::class , 'store'])->name('submitCours')->middleware(['auth']);
