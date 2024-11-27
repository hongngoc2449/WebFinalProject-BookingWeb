<?php

use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::get('/products', function () {
    return Product::all(); // Lấy tất cả sản phẩm bằng Eloquent
});
