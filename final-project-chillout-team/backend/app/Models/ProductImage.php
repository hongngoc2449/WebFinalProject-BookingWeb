<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $table = 'ProductImage';
    public $timestamps = false;

    protected $fillable = [
        'product_id', // Ví dụ: liên kết với bảng Products
        'image_url',
        // Thêm các cột khác nếu có
    ];

    // Kết nối với bảng Products (nếu có liên kết)
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
