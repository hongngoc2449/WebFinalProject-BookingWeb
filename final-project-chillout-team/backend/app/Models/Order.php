<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'Orders';
    public $timestamps = false;

    protected $fillable = [
        'customer_name', // Ví dụ: cột chứa tên khách hàng
        'total_price',
        'status',
        'created_at', // Nếu có
        // Thêm các cột khác nếu có
    ];

    // Kết nối với bảng OrderItem
    public function items()
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }
}
