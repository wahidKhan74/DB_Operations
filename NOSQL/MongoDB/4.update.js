// Simple update: change product price
// db.products.updateOne({filter}, {operation}, {options})
db.products.updateOne({_id:"P1001"}, { $set :{ price: 78999 }});
db.products.updateOne({_id:"P1001"}, { $set :{ price: 68999 , stock: 100 }});

// Update multiple products by category
// Increases stock by +20 for all fashion products.

db.products.updateMany({category: "fashion"}, { $inc: { stock : 20 }});  // stock = stock + 20
db.products.updateMany({category: "fashion"}, [ { $set: { stock : { $add :[ "$stock", 20] } }}]);  // stock = stock + 20

// make all fashion category product stock 20
db.products.updateMany({category: "fashion"}, { $set: { stock : 20 }});


//Adds new field isActive:true to all documents.
db.products.updateMany({}, { $set: { isActive:true }});
db.products.updateMany({}, { $set: { discount : "5%" }});

// Renames field brand → manufacturer.
db.products.updateMany({}, { $rename: { "brand":"manufacturer" }});

// Remove a field :: Deletes the field discount from all documents.
db.products.updateMany({}, { $unset: { discount : "" }});

// Update nested field (customer city)

db.customers.updateOne({_id:"C1002"}, { $set :{ "address.city": "New York" }});
db.customers.updateOne({_id:"C1002"}, { $set :{ "address.country": "USA" }});


// Increase order total amount
db.orders.updateMany({orderId: "O5003"}, { $inc: { totalAmount : 500 }}); 

db.orders.updateOne(
  { orderId: "O5004" },
  { $set: { status: "Shipped" } }
);

//Push a new item into a cart
db.carts.updateOne( { cartId: "Cart1001" }, { $push : { items : { pid: "P1015", quantity: 1, price: 3499 } }});

// Push multiple items at once
db.carts.updateOne(
  { cartId: "Cart1002" },
  { $push: { items: { $each: [
      { pid: "P1004", quantity: 1, price: 2999 },
      { pid: "P1010", quantity: 1, price: 12999 }
  ] } } }
);

// Removes product P1005 from the cart.
db.carts.updateOne(
  { cartId: "Cart1003" },
  { $pull: { items: { pid: "P1005" } } }
);
