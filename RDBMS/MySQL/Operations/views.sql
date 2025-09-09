-- 1. Simple View – All Sales Orders
CREATE OR REPLACE VIEW v_all_orders AS 
SELECT order_id, customer_id, order_datetime, total, payment_method, status
FROM pharmacy_app.sales_orders;

-- Usage 
SELECT * FROM v_all_orders;

-- 2. Join View – Orders with Customer Info
CREATE OR REPLACE VIEW v_orders_with_customers AS 
SELECT o.order_id, o.order_datetime, o.total, o.payment_method, o.status, 
c.customer_id, c.name AS customer_name, c.phone, c.email
FROM pharmacy_app.sales_orders o
JOIN pharmacy_app.customers c ON o.customer_id = c.customer_id;

-- Usage 
SELECT * from v_orders_with_customers;
SELECT * from v_orders_with_customers where customer_id=2;
SELECT * from v_orders_with_customers where customer_name LIKE "Jo%";


-- 3. Aggregated View – Total Sales reports per Customer
CREATE OR REPLACE VIEW v_total_sales_per_customer AS
SELECT customer_id, SUM(total) AS total_sales, 
COUNT(*) as total_orders, SUM(CASE WHEN status='COMPLETED' THEN total ELSE 0 END) AS completed_sales
FROM pharmacy_app.sales_orders GROUP BY customer_id;

-- Usage 
SELECT * from v_total_sales_per_customer ;
SELECT * from v_total_sales_per_customer ORDER BY total_sales DESC ;

-- 4. Daily Sales Summary View
CREATE OR REPLACE VIEW v_daily_sales_summary AS
SELECT DATE(order_datetime) AS order_date, COUNT(*) as total_orders, SUM(total) AS total_amount,
SUM(CASE WHEN status='COMPLETED' THEN total ELSE 0 END) AS completed_orders
FROM pharmacy_app.sales_orders GROUP BY order_date ;

-- Usage 
SELECT * from v_daily_sales_summary ;
SELECT * FROM v_daily_sales_summary WHERE order_date BETWEEN '2025-01-01' AND '2025-01-15';


-- 5. Payment Method Wise Sales (Group order by payment method wise)
-- 6. Order Status Wise Sales (Group order by status wise)

