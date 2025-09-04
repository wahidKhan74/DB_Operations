SELECT * FROM pharmacy_app.customers;

SELECT customer_id, name, phone FROM pharmacy_app.customers;

SELECT * FROM pharmacy_app.customers WHERE name = 'John Doe';
SELECT customer_id, name, phone FROM pharmacy_app.customers WHERE name = 'John Doe';


-- Customers with Gmail emails
SELECT * FROM pharmacy_app.customers WHERE email LIKE '%gmail.com';


-- Alphabetical order
SELECT * FROM pharmacy_app.customers ORDER BY name ASC;

-- Latest customers first
SELECT * FROM pharmacy_app.customers ORDER BY created_at DESC;

-- First 5 customers
SELECT * FROM pharmacy_app.customers LIMIT 5;