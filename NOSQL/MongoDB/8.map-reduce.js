// MongoDB’s mapReduce is older and less efficient than aggregation,
// but still useful for complex custom logic.

// Total Revenue per Customer
db.orders.mapReduce(
    function() { 
        emit(this.customerId, this.totalAmount); 
    },
    function(key, values) { 
        return Array.sum(values); 
    },
    { out: "total_revenue_per_customer" }
);

// Top 5 Selling Products (by quantity)
db.orders.mapReduce(
    function() {
        this.items.forEach(function(item) {
            emit(item.pid, item.quantity);
        })
    },
    function(key, values) {
        return Array.sum(values);
    },
    {
        out: { inline: 1 },
        sort: { value: -1 },
        limit: 5
    }
);

// Daily Order Count
db.orders.mapReduce(
  function () {
    const day = this.orderDate.toISOString().split("T")[0];
    emit(day, 1);
  },
  function (key, values) {
    return Array.sum(values);
  },
  { out: "dailyOrders" }
);


// Aggregation = faster, modern, optimized (use it for most analytics).
// MapReduce = flexible but slower (only when custom logic needed).