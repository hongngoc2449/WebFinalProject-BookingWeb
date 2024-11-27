<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $table = 'OrderItem';
    public $timestamps = false;

    protected $fillable = [
        'order_id', // Ví dụ: liên kết với bảng Orders
        'product_id',
        'quantity',
        'price',
        // Thêm các cột khác nếu có
    ];

    // Kết nối với bảng Orders (nếu có liên kết)
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    // Kết nối với bảng Products (nếu có liên kết)
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
