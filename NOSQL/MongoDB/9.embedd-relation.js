// Types of Relationships in MongoDB
// MongoDB supports three main relationship patterns:
// One-to-One
// One-to-Many
// Many-to-Many

// 1. One-to-One Relationship
// In a one-to-one relationship, each document in a collection is linked to one and only one document in another collection.


// Example: A user has one profile. (Embedding)

db.users.insertOne({
  _id: "U1001",
  name: "Alice",
  profile: {
    age: 28,
    gender: "F",
    address: "123 Main St"
  }
});

// Example (Referencing)

// users collection
db.users.insertOne({ _id: "U1001", name: "Alice", profileId: "P2001" });

// profiles collection
db.profiles.insertOne({ _id: "P2001", age: 28, gender: "F", address: "123 Main St" });

// 2. One-to-Many Relationship
// In a one-to-many relationship, 
// a single document in one collection is linked to multiple documents in another collection.

// Example:(Embedding)
db.customers.insertOne({
  _id: "C1001",
  name: "Alice",
  orders: [
    { orderId: "O5001", totalAmount: 99997, status: "Pending" },
    { orderId: "O5002", totalAmount: 69999, status: "Shipped" }
  ]
})


// customers collection
db.customers.insertOne({ _id: "C1001", name: "Alice" });

// orders collection
db.orders.insertMany([
    { _id: "O5001", customerId: "C1001", totalAmount: 99997, status: "Pending" },
    { _id: "O5002", customerId: "C1001", totalAmount: 69999, status: "Shipped" }
]);


// 3. Many-to-Many Relationship
// In a many-to-many relationship, 
// multiple documents in one collection can be linked to multiple documents in another collection.

// Example: Students and Courses (Referencing)

// students collection
db.students.insertMany([
{ _id: "S1", name: "John", enrolledCourses: ["C101", "C102"] },
{ _id: "S2", name: "Jane", enrolledCourses: ["C101"] }
]);

// courses collection
db.course.insertMany([
    { _id: "C101", title: "MongoDB Basics", students: ["S1", "S2"] },
    { _id: "C102", title: "Advanced MongoDB", students: ["S1"] }
]);

