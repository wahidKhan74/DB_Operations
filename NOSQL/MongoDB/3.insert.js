// create orders

db.orders.insertMany([
  {
    orderId: "O5001",
    customerId: "C1001",
    items: [
      { pid: "P1001", quantity: 1, price: 79999 },
      { pid: "P1003", quantity: 2, price: 9999 }
    ],
    totalAmount: 99997,
    status: "Pending",
    orderDate: new Date("2025-09-01")
  },
  {
    orderId: "O5002",
    customerId: "C1002",
    items: [
      { pid: "P1002", quantity: 1, price: 69999 }
    ],
    totalAmount: 69999,
    status: "Shipped",
    orderDate: new Date("2025-09-02")
  },
  {
    orderId: "O5003",
    customerId: "C1003",
    items: [
      { pid: "P1004", quantity: 3, price: 2999 },
      { pid: "P1005", quantity: 1, price: 4999 }
    ],
    totalAmount: 13996,
    status: "Delivered",
    orderDate: new Date("2025-09-02")
  },
  {
    orderId: "O5004",
    customerId: "C1004",
    items: [
      { pid: "P1006", quantity: 1, price: 15999 },
      { pid: "P1001", quantity: 1, price: 79999 }
    ],
    totalAmount: 95998,
    status: "Pending",
    orderDate: new Date("2025-09-03")
  },
  {
    orderId: "O5005",
    customerId: "C1005",
    items: [
      { pid: "P1003", quantity: 2, price: 9999 },
      { pid: "P1007", quantity: 1, price: 2499 }
    ],
    totalAmount: 22497,
    status: "Cancelled",
    orderDate: new Date("2025-09-04")
  },
  {
    orderId: "O5006",
    customerId: "C1006",
    items: [
      { pid: "P1002", quantity: 1, price: 69999 },
      { pid: "P1008", quantity: 1, price: 1999 }
    ],
    totalAmount: 71998,
    status: "Shipped",
    orderDate: new Date("2025-09-04")
  },
  {
    orderId: "O5007",
    customerId: "C1007",
    items: [
      { pid: "P1009", quantity: 1, price: 499 },
      { pid: "P1005", quantity: 2, price: 4999 }
    ],
    totalAmount: 10497,
    status: "Delivered",
    orderDate: new Date("2025-09-05")
  },
  {
    orderId: "O5008",
    customerId: "C1008",
    items: [
      { pid: "P1010", quantity: 1, price: 12999 }
    ],
    totalAmount: 12999,
    status: "Pending",
    orderDate: new Date("2025-09-05")
  },
  {
    orderId: "O5009",
    customerId: "C1009",
    items: [
      { pid: "P1001", quantity: 1, price: 79999 },
      { pid: "P1003", quantity: 1, price: 9999 },
      { pid: "P1011", quantity: 2, price: 1499 }
    ],
    totalAmount: 92496,
    status: "Shipped",
    orderDate: new Date("2025-09-06")
  },
  {
    orderId: "O5010",
    customerId: "C1010",
    items: [
      { pid: "P1012", quantity: 1, price: 5499 },
      { pid: "P1007", quantity: 3, price: 2499 }
    ],
    totalAmount: 12996,
    status: "Delivered",
    orderDate: new Date("2025-09-06")
  },
  {
    orderId: "O5011",
    customerId: "C1011",
    items: [
      { pid: "P1013", quantity: 1, price: 29999 }
    ],
    totalAmount: 29999,
    status: "Pending",
    orderDate: new Date("2025-09-07")
  },
  {
    orderId: "O5012",
    customerId: "C1012",
    items: [
      { pid: "P1004", quantity: 2, price: 2999 },
      { pid: "P1005", quantity: 1, price: 4999 }
    ],
    totalAmount: 10997,
    status: "Shipped",
    orderDate: new Date("2025-09-07")
  },
  {
    orderId: "O5013",
    customerId: "C1013",
    items: [
      { pid: "P1006", quantity: 1, price: 15999 }
    ],
    totalAmount: 15999,
    status: "Delivered",
    orderDate: new Date("2025-09-08")
  },
  {
    orderId: "O5014",
    customerId: "C1014",
    items: [
      { pid: "P1014", quantity: 2, price: 3999 },
      { pid: "P1010", quantity: 1, price: 12999 }
    ],
    totalAmount: 20997,
    status: "Pending",
    orderDate: new Date("2025-09-08")
  },
  {
    orderId: "O5015",
    customerId: "C1015",
    items: [
      { pid: "P1002", quantity: 1, price: 69999 },
      { pid: "P1015", quantity: 1, price: 3499 }
    ],
    totalAmount: 73498,
    status: "Cancelled",
    orderDate: new Date("2025-09-09")
  },
  {
    orderId: "O5016",
    customerId: "C1016",
    items: [
      { pid: "P1007", quantity: 2, price: 2499 },
      { pid: "P1008", quantity: 1, price: 1999 }
    ],
    totalAmount: 6997,
    status: "Shipped",
    orderDate: new Date("2025-09-09")
  },
  {
    orderId: "O5017",
    customerId: "C1017",
    items: [
      { pid: "P1016", quantity: 1, price: 8999 },
      { pid: "P1011", quantity: 2, price: 1499 }
    ],
    totalAmount: 11997,
    status: "Delivered",
    orderDate: new Date("2025-09-10")
  },
  {
    orderId: "O5018",
    customerId: "C1018",
    items: [
      { pid: "P1017", quantity: 1, price: 45999 }
    ],
    totalAmount: 45999,
    status: "Pending",
    orderDate: new Date("2025-09-10")
  },
  {
    orderId: "O5019",
    customerId: "C1019",
    items: [
      { pid: "P1009", quantity: 3, price: 499 },
      { pid: "P1012", quantity: 1, price: 5499 }
    ],
    totalAmount: 6996,
    status: "Shipped",
    orderDate: new Date("2025-09-11")
  },
  {
    orderId: "O5020",
    customerId: "C1020",
    items: [
      { pid: "P1018", quantity: 1, price: 8999 },
      { pid: "P1005", quantity: 1, price: 4999 }
    ],
    totalAmount: 13998,
    status: "Delivered",
    orderDate: new Date("2025-09-11")
  }
]);


// create products

db.products.insertMany([
  {
    _id: "P1001",
    name: "iPhone 15",
    category: "electronics",
    price: 79999,
    stock: 50,
    brand: "Apple",
    createdAt: new Date()
  },
  {
    _id: "P1002",
    name: "Samsung Galaxy S24",
    category: "electronics",
    price: 69999,
    stock: 40,
    brand: "Samsung",
    createdAt: new Date()
  },
  {
    _id: "P1003",
    name: "Nike Air Max",
    category: "fashion",
    price: 9999,
    stock: 100,
    brand: "Nike",
    createdAt: new Date()
  },
  {
    _id: "P1004",
    name: "Boat Rockerz Headphones",
    category: "electronics",
    price: 2999,
    stock: 120,
    brand: "Boat",
    createdAt: new Date()
  },
  {
    _id: "P1005",
    name: "Adidas Running Shoes",
    category: "fashion",
    price: 4999,
    stock: 75,
    brand: "Adidas",
    createdAt: new Date()
  },
  {
    _id: "P1006",
    name: "LG Smart TV 43 inch",
    category: "electronics",
    price: 15999,
    stock: 30,
    brand: "LG",
    createdAt: new Date()
  },
  {
    _id: "P1007",
    name: "Puma Sports T-shirt",
    category: "fashion",
    price: 2499,
    stock: 200,
    brand: "Puma",
    createdAt: new Date()
  },
  {
    _id: "P1008",
    name: "Wildcraft Backpack",
    category: "fashion",
    price: 1999,
    stock: 150,
    brand: "Wildcraft",
    createdAt: new Date()
  },
  {
    _id: "P1009",
    name: "Mi Power Bank 10000mAh",
    category: "electronics",
    price: 499,
    stock: 300,
    brand: "Xiaomi",
    createdAt: new Date()
  },
  {
    _id: "P1010",
    name: "Sony Bluetooth Speaker",
    category: "electronics",
    price: 12999,
    stock: 45,
    brand: "Sony",
    createdAt: new Date()
  },
  {
    _id: "P1011",
    name: "Lenovo Wireless Mouse",
    category: "electronics",
    price: 1499,
    stock: 180,
    brand: "Lenovo",
    createdAt: new Date()
  },
  {
    _id: "P1012",
    name: "Philips Trimmer",
    category: "electronics",
    price: 5499,
    stock: 60,
    brand: "Philips",
    createdAt: new Date()
  },
  {
    _id: "P1013",
    name: "HP Laptop 15 inch",
    category: "electronics",
    price: 29999,
    stock: 25,
    brand: "HP",
    createdAt: new Date()
  },
  {
    _id: "P1014",
    name: "Allen Solly Jeans",
    category: "fashion",
    price: 3999,
    stock: 90,
    brand: "Allen Solly",
    createdAt: new Date()
  },
  {
    _id: "P1015",
    name: "Ray-Ban Sunglasses",
    category: "fashion",
    price: 3499,
    stock: 70,
    brand: "Ray-Ban",
    createdAt: new Date()
  },
  {
    _id: "P1016",
    name: "Casio G-Shock Watch",
    category: "fashion",
    price: 8999,
    stock: 55,
    brand: "Casio",
    createdAt: new Date()
  },
  {
    _id: "P1017",
    name: "Dell Inspiron Laptop",
    category: "electronics",
    price: 45999,
    stock: 40,
    brand: "Dell",
    createdAt: new Date()
  },
  {
    _id: "P1018",
    name: "Fastrack Analog Watch",
    category: "fashion",
    price: 8999,
    stock: 80,
    brand: "Fastrack",
    createdAt: new Date()
  }
]);


//create customer 

db.customers.insertMany([
  {
    _id: "C1001",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91-9876543210",
    address: { street: "MG Road", city: "Bangalore", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1002",
    name: "Ananya Gupta",
    email: "ananya.gupta@example.com",
    phone: "+91-9123456780",
    address: { street: "DLF Phase 3", city: "Gurgaon", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1003",
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    phone: "+91-9812345678",
    address: { street: "Juhu Road", city: "Mumbai", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1004",
    name: "Priya Singh",
    email: "priya.singh@example.com",
    phone: "+91-9988776655",
    address: { street: "Park Street", city: "Kolkata", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1005",
    name: "Rohan Verma",
    email: "rohan.verma@example.com",
    phone: "+91-9765432109",
    address: { street: "Anna Nagar", city: "Chennai", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1006",
    name: "Sneha Iyer",
    email: "sneha.iyer@example.com",
    phone: "+91-9345678910",
    address: { street: "Banjara Hills", city: "Hyderabad", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1007",
    name: "Vikram Desai",
    email: "vikram.desai@example.com",
    phone: "+91-9234567890",
    address: { street: "FC Road", city: "Pune", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1008",
    name: "Kavya Nair",
    email: "kavya.nair@example.com",
    phone: "+91-9123456700",
    address: { street: "Marine Drive", city: "Mumbai", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1009",
    name: "Amit Chawla",
    email: "amit.chawla@example.com",
    phone: "+91-9898989898",
    address: { street: "Connaught Place", city: "Delhi", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1010",
    name: "Meera Joshi",
    email: "meera.joshi@example.com",
    phone: "+91-9767543210",
    address: { street: "Law Garden", city: "Ahmedabad", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1011",
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com",
    phone: "+91-9823123456",
    address: { street: "Sector 17", city: "Chandigarh", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1012",
    name: "Ishita Kapoor",
    email: "ishita.kapoor@example.com",
    phone: "+91-9112233445",
    address: { street: "Civil Lines", city: "Jaipur", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1013",
    name: "Aditya Rao",
    email: "aditya.rao@example.com",
    phone: "+91-9876001234",
    address: { street: "Race Course Road", city: "Coimbatore", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1014",
    name: "Shreya Patil",
    email: "shreya.patil@example.com",
    phone: "+91-9123456788",
    address: { street: "Shivajinagar", city: "Pune", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1015",
    name: "Manish Tiwari",
    email: "manish.tiwari@example.com",
    phone: "+91-9334455667",
    address: { street: "Hazratganj", city: "Lucknow", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1016",
    name: "Ritika Agarwal",
    email: "ritika.agarwal@example.com",
    phone: "+91-9556677889",
    address: { street: "Salt Lake", city: "Kolkata", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1017",
    name: "Siddharth Jain",
    email: "siddharth.jain@example.com",
    phone: "+91-9011223344",
    address: { street: "Ring Road", city: "Indore", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1018",
    name: "Pooja Reddy",
    email: "pooja.reddy@example.com",
    phone: "+91-9667788990",
    address: { street: "Abids", city: "Hyderabad", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1019",
    name: "Harsh Kumar",
    email: "harsh.kumar@example.com",
    phone: "+91-9344556677",
    address: { street: "Hazaribagh Road", city: "Ranchi", country: "India" },
    createdAt: new Date()
  },
  {
    _id: "C1020",
    name: "Neha Bansal",
    email: "neha.bansal@example.com",
    phone: "+91-9887766554",
    address: { street: "Sector 62", city: "Noida", country: "India" },
    createdAt: new Date()
  }
]);


// create add carts
db.carts.insertMany([
  {
    cartId: "Cart1001",
    customerId: "C1001",
    items: [
      { pid: "P1001", quantity: 1, price: 79999 },
      { pid: "P1003", quantity: 1, price: 9999 }
    ],
    totalAmount: 89998,
    createdAt: new Date("2025-09-01")
  },
  {
    cartId: "Cart1002",
    customerId: "C1002",
    items: [
      { pid: "P1002", quantity: 1, price: 69999 }
    ],
    totalAmount: 69999,
    createdAt: new Date("2025-09-01")
  },
  {
    cartId: "Cart1003",
    customerId: "C1003",
    items: [
      { pid: "P1004", quantity: 2, price: 2999 },
      { pid: "P1005", quantity: 1, price: 4999 }
    ],
    totalAmount: 10997,
    createdAt: new Date("2025-09-02")
  },
  {
    cartId: "Cart1004",
    customerId: "C1004",
    items: [
      { pid: "P1006", quantity: 1, price: 15999 }
    ],
    totalAmount: 15999,
    createdAt: new Date("2025-09-02")
  },
  {
    cartId: "Cart1005",
    customerId: "C1005",
    items: [
      { pid: "P1007", quantity: 2, price: 2499 },
      { pid: "P1008", quantity: 1, price: 1999 }
    ],
    totalAmount: 6997,
    createdAt: new Date("2025-09-03")
  },
  {
    cartId: "Cart1006",
    customerId: "C1006",
    items: [
      { pid: "P1009", quantity: 1, price: 499 },
      { pid: "P1010", quantity: 1, price: 12999 }
    ],
    totalAmount: 13498,
    createdAt: new Date("2025-09-03")
  },
  {
    cartId: "Cart1007",
    customerId: "C1007",
    items: [
      { pid: "P1011", quantity: 2, price: 1499 },
      { pid: "P1005", quantity: 1, price: 4999 }
    ],
    totalAmount: 7997,
    createdAt: new Date("2025-09-04")
  },
  {
    cartId: "Cart1008",
    customerId: "C1008",
    items: [
      { pid: "P1012", quantity: 1, price: 5499 },
      { pid: "P1007", quantity: 1, price: 2499 }
    ],
    totalAmount: 7998,
    createdAt: new Date("2025-09-04")
  },
  {
    cartId: "Cart1009",
    customerId: "C1009",
    items: [
      { pid: "P1013", quantity: 1, price: 29999 }
    ],
    totalAmount: 29999,
    createdAt: new Date("2025-09-05")
  },
  {
    cartId: "Cart1010",
    customerId: "C1010",
    items: [
      { pid: "P1014", quantity: 2, price: 3999 },
      { pid: "P1015", quantity: 1, price: 3499 }
    ],
    totalAmount: 11497,
    createdAt: new Date("2025-09-05")
  },
  {
    cartId: "Cart1011",
    customerId: "C1011",
    items: [
      { pid: "P1002", quantity: 1, price: 69999 },
      { pid: "P1008", quantity: 1, price: 1999 }
    ],
    totalAmount: 71998,
    createdAt: new Date("2025-09-06")
  },
  {
    cartId: "Cart1012",
    customerId: "C1012",
    items: [
      { pid: "P1009", quantity: 2, price: 499 },
      { pid: "P1016", quantity: 1, price: 8999 }
    ],
    totalAmount: 9997,
    createdAt: new Date("2025-09-06")
  },
  {
    cartId: "Cart1013",
    customerId: "C1013",
    items: [
      { pid: "P1017", quantity: 1, price: 45999 }
    ],
    totalAmount: 45999,
    createdAt: new Date("2025-09-07")
  },
  {
    cartId: "Cart1014",
    customerId: "C1014",
    items: [
      { pid: "P1010", quantity: 1, price: 12999 },
      { pid: "P1003", quantity: 2, price: 9999 }
    ],
    totalAmount: 32997,
    createdAt: new Date("2025-09-07")
  },
  {
    cartId: "Cart1015",
    customerId: "C1015",
    items: [
      { pid: "P1001", quantity: 1, price: 79999 }
    ],
    totalAmount: 79999,
    createdAt: new Date("2025-09-08")
  },
  {
    cartId: "Cart1016",
    customerId: "C1016",
    items: [
      { pid: "P1018", quantity: 1, price: 8999 },
      { pid: "P1012", quantity: 1, price: 5499 }
    ],
    totalAmount: 14498,
    createdAt: new Date("2025-09-08")
  },
  {
    cartId: "Cart1017",
    customerId: "C1017",
    items: [
      { pid: "P1015", quantity: 2, price: 3499 },
      { pid: "P1009", quantity: 1, price: 499 }
    ],
    totalAmount: 7497,
    createdAt: new Date("2025-09-09")
  },
  {
    cartId: "Cart1018",
    customerId: "C1018",
    items: [
      { pid: "P1011", quantity: 1, price: 1499 },
      { pid: "P1006", quantity: 1, price: 15999 }
    ],
    totalAmount: 17498,
    createdAt: new Date("2025-09-09")
  },
  {
    cartId: "Cart1019",
    customerId: "C1019",
    items: [
      { pid: "P1004", quantity: 1, price: 2999 },
      { pid: "P1014", quantity: 1, price: 3999 }
    ],
    totalAmount: 6998,
    createdAt: new Date("2025-09-10")
  },
  {
    cartId: "Cart1020",
    customerId: "C1020",
    items: [
      { pid: "P1007", quantity: 1, price: 2499 },
      { pid: "P1016", quantity: 1, price: 8999 }
    ],
    totalAmount: 11498,
    createdAt: new Date("2025-09-10")
  }
]);



db.carts.insertMany([{
    cartId: "Cart1021",
    customerId: "C1021",
    items: [
      { pid: "P1007", quantity: 1, price: 2499, stock: 20 }
    ],
    totalAmount: 11498
  }
]);