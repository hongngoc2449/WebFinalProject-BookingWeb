<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'Products'; // Tên bảng trong cơ sở dữ liệu
    protected $fillable = ['name', 'price', 'description']; // Cột có thể điền dữ liệu
}
