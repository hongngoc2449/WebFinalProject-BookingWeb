<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    // Chỉ định tên bảng nếu tên không phải là dạng số nhiều chuẩn
    protected $table = 'Addresses';

    // Nếu bảng không sử dụng `created_at` và `updated_at`, tắt timestamps
    public $timestamps = false;

    // Định nghĩa cột nào được phép ghi
    protected $fillable = [
        'column1', // Thay bằng các cột thực tế của bảng Addresses
        'column2',
        // ...
    ];
}
