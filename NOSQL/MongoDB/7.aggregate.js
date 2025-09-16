// Total Sales per Customer
db.orders.aggregate([{
    $group: {
        _id: "$customerId",
        totalSales: { $sum: "$totalAmount" },
        orderCount: { $sum: 1 }
    }
}]);

// Top 5 Selling Products (by quantity)
db.orders.aggregate([
    { $unwind: "$items"}, 
    { $group: { 
        _id: "$items.pid",
        totalQuantity: { $sum: "$items.quantity" },
        totalSales: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
    }},
    { $sort: { totalQuantity: -1 }},
    { $limit: 5 }
]);

// Orders by status
db.orders.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 }, total: { $sum: "$totalAmount" } } }
]);