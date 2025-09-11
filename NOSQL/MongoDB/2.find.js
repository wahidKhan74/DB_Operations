// Find data 
db.collection.find({});  // select all from table

// find all
db.products.find({});  // select all from products collection


// find data and select specific fields or projection
db.products.find({ }, {name:1, stock:1});  // select all from products collection
db.products.find({ }, {_id:0, name:1, stock:1});

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


