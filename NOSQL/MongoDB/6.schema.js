// Schema Validation
// Even though MongoDB is flexible, you can enforce validation rules to keep data consistent.
// Validation is defined when creating or updating a collection.
// db.createCollection("name", { validator: { $jsonSchema: { ... } } })

// Example: Create a collection with schema validation
db.createCollection("products", {
  validator: {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "price", "category"],
        properties: {
            name: { bsonType: "string" },
            price: { bsonType: "number", minimum: 0 },
            category: { bsonType: "string" },
            inStock: { bsonType: "bool" }
        }
    }
    }
});

// usage example: Insert a valid document
db.products.insertOne({ name: "Laptop", price: 999.99, category: "Electronics", inStock: true });
// usage example: Insert an invalid document (will fail validation)
// db.products.insertOne({ name: "Laptop", price: -50, category: "Electronics" }); // Fails due to negative price



db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string", pattern: "^.+@.+$" },
        age: { bsonType: "int", minimum: 18 }
      }
    }
  }
});

// usage example
db.users.insertOne({ name: "Wahid", email: "wahid@example.com", age: 25 }); // ✅ valid
db.users.insertOne({ name: "Ali", email: "invalidEmail", age: 16 }) // ❌ fails validation


// Collection
db.users.insertMany([
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" }
]);

// Create index on "age"
db.users.createIndex({ age: 1 }); // 1 = ascending, -1 = descending

db.users.find({ age: 30 }).explain("executionStats")

