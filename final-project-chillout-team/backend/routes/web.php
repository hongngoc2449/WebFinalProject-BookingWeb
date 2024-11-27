<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/products', function () {
    return response()->json([
        ['id' => 1, 'name' => 'Product 1', 'price' => 100],
        ['id' => 2, 'name' => 'Product 2', 'price' => 200],
    ]);
});
