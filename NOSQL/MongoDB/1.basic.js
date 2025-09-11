// start mongosh (assumes mongod running locally)
$mongosh


// show current databases
show dbs;

// switch to a training DB
use ecommerce_db;

// Create or insert operations add new documents to a collection.

// Insert One document
db.products.insertOne(
    { "pid": "P1002", "name": "Running Shoes", "category": "footwear", "price": 59.95, "stock": 42 }
)

db.users.insertOne(
     {"uid":"U1001","name":"Alice Johnson","email":"alice.johnson@example.com","phone":"+1-202-555-0147","role":"customer","address":{"city":"New York","country":"USA"},"active":true}
)

// Insert Multiple docs
db.products.insertMany([
  { "pid": "P1003", "name": "Coffee Mug", "category": "home", "price": 7.5, "stock": 200 },
  { "pid": "P1004", "name": "Wireless Mouse", "category": "electronics", "price": 19.99, "stock": 75 },
  { "pid": "P1005", "name": "Office Chair", "category": "furniture", "price": 149.99, "stock": 15 },
  { "pid": "P1006", "name": "Backpack", "category": "accessories", "price": 39.5, "stock": 60 },
  { "pid": "P1007", "name": "Smartphone", "category": "electronics", "price": 499.99, "stock": 25 },
  { "pid": "P1008", "name": "Yoga Mat", "category": "fitness", "price": 24.99, "stock": 85 },
  { "pid": "P1009", "name": "LED Desk Lamp", "category": "home", "price": 29.95, "stock": 50 },
  { "pid": "P1010", "name": "Jeans", "category": "clothing", "price": 44.99, "stock": 100 }
])

db.users.insertMany([
  {"uid":"U1002","name":"Bob Smith","email":"bob.smith@example.com","phone":"+44-20-7946-1234","role":"seller","address":{"city":"London","country":"UK"},"active":true},
  {"uid":"U1003","name":"Charlie Lee","email":"charlie.lee@example.com","phone":"+91-9876543210","role":"customer","address":{"city":"Mumbai","country":"India"},"active":false},
  {"uid":"U1004","name":"Diana Lopez","email":"diana.lopez@example.com","phone":"+34-600-123-456","role":"admin","address":{"city":"Madrid","country":"Spain"},"active":true},
  {"uid":"U1005","name":"Ethan Wang","email":"ethan.wang@example.com","phone":"+86-138-0013-5678","role":"customer","address":{"city":"Beijing","country":"China"},"active":true}
])