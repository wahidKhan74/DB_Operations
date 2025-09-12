// Find data 
db.collection.find({filter},{projection});  // select all from table

// find all
db.products.find({});  // select all from products collection
db.carts.find({});  // select all from carts collection
db.orders.find();  // select all from orders collection
db.orders.find().pretty();  // select all from orders collection


// find One 
db.products.findOne({"_id": "P1001"});  // find on product
db.products.findOne({"_id": "P1001"}, { _id:0 , name: 1, price: 1});  // find one poroduct ans show name, price

// find data and select specific fields or projection
db.products.find({ }, {name:1, stock:1});  // select all from products collection
db.products.find({ }, {_id:0, name:1, stock:1});

// Filter + projection
db.products.find({ price: { $gte: 10000 } }, {_id:0, name:1, price:1});
db.products.find({ price: { $gte: 10000 } }, {_id:0, name:1, price:1}).sort({ price : -1});

// find and filter data
db.products.find({ category: "electronics" }, {});

db.products.find({ category: "electronics" , stock  : { $gt : 25 } }, {});
db.products.find({ category: "electronics" , stock  : { $lt : 25 } }, {});

db.products.find({ category: "electronics" , stock  : { $eq : 25 } }, {});
db.products.find({ category: "electronics" , stock  : 25  }, {});


// projection + filter
db.products.find({ category: "electronics" , stock  : 25  }, {name:1, _id:0, stock:1});
db.products.find({ $or: [ {category: "electronics"} , {stock  : 25} ]  }, {name:1, _id:0, stock:1});


// find on users
db.users.find({ "name": "Alice Johnson" });

// find nested object based search
db.users.find({ "address.city": "New York" });

// nested array
// roles.0.role → checks the first element
// roles.1.role → checks the second element
db.users.find({ "roles.1.role": "admin" });

// Any element match
db.users.find({ "roles.role": "admin" });
db.users.find({
    roles : { $elemMatch : { role : "admin"}}
});


// In operator  :: Match multiple brands ($in)
db.products.find({
    brand: { $in: ["Apple", "Samsung"]}
}, {_id:0, name:1, price:1});

db.products.find({ _id: { $in: ["P1001","P1013","P1017"] } }).pretty();

// Text / partial match using regex (case-insensitive)
db.products.find({ name : { $regex : /watch/i }} , {_id:0, name:1, price:1}).pretty();


// Get the latest product (by createdAt)
db.products.find().sort({ createdAt : -1 }).limit(1);

// Find orders that contain product P1002 (array field query)
db.orders.find(
  { "items.pid": "P1002" },
  { orderId:1, customerId:1, _id:0 , items: 1 }
).pretty();

// Return only the matching item inside items (use $elemMatch projection)
db.orders.find(
  { "items.pid": "P1002" },
  { orderId:1, customerId:1, items: { $elemMatch: { pid: "P1002" } }, _id:0 }
).pretty();

// Pagination example (page 2, page size 5) — electronics sorted by price asc
// Classic pagination using skip + limit.
const page =2 , pageSize = 5;
db.products.find({ category: "electronics" },{_id:0, name:1, price:1})
.sort({price: 1})
.skip((page-1)*pageSize)
.limit(pageSize)
.pretty()
