// Delete one product by productId
db.products.deleteOne({  "_id": "P1018" });
// Delete one customer by email
db.customers.deleteOne({ email: "alice@example.com" });


// Delete all products in "electronics" category
db.products.deleteMany({ category: "electronics" });


// Delete all customers from "Canada"
db.customers.deleteMany({ "address.country": "Canada" });


// Delete all products with stock = 0 (out of stock)
db.products.deleteMany({ stock: { $eq: 0 } });


// Delete products that are "clothing" and price < 500
db.products.deleteMany({
  category: "clothing",
  price: { $lt: 500 }
});

// delete all records
db.products.deleteMany({});