<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// -----------------------------
// Página de Inicio (raíz)
// -----------------------------
Route::get('/', function () {
    return Inertia::render('Inicio', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
})->name('welcome');

// -----------------------------
// Dashboard (protegido)
// -----------------------------
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// -----------------------------
// Rutas públicas a páginas
// -----------------------------
Route::get('/tecnologia', function () {
    return Inertia::render('Tecnologia');
})->name('tecnologia');

Route::get('/nosotros', function () {
    return Inertia::render('Nosotros');
})->name('nosotros');

Route::get('/productos', function () {
    return Inertia::render('Productos');
})->name('productos');

Route::get('/innovacion', function () {
    return Inertia::render('Innovacion');
})->name('innovacion');

Route::get('/noticias', function () {
    return Inertia::render('Noticias');   // ← NUEVA RUTA
})->name('noticias');

// -----------------------------
// Rutas protegidas para perfil
// -----------------------------
Route::middleware('auth')->group(function () {
    Route::get('/profile',   [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile',[ProfileController::class, 'destroy'])->name('profile.destroy');
});

// -----------------------------
// Autenticación (login, register, etc.)
// -----------------------------
require __DIR__ . '/auth.php';
