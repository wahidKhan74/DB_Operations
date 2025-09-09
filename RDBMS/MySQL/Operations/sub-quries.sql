-- Scalar Subquery (Single Value)
-- Find customers whose sales are above the average order total.
SELECT customer_id, order_id, total
FROM pharmacy_app.sales_orders
WHERE total > (
    SELECT AVG(total)
    FROM pharmacy_app.sales_orders
);

-- Subquery in IN 
-- Find customers who have at least one COMPLETED order.

SELECT customer_id, name
FROM pharmacy_app.customers
WHERE customer_id IN (
    SELECT DISTINCT customer_id
    FROM pharmacy_app.sales_orders
    WHERE status = 'COMPLETED'
);


-- Subquery in FROM (Derived Table)
-- Get top 5 highest sales amounts.

SELECT *
FROM (
    SELECT order_id, customer_id, total
    FROM pharmacy_app.sales_orders
    ORDER BY total DESC
    LIMIT 5
) AS top_orders;

-- EXISTS Subquery
-- Get customers who have at least one order > 300.

SELECT c.customer_id, c.name
FROM pharmacy_app.customers c
WHERE EXISTS (
    SELECT 1
    FROM pharmacy_app.sales_orders o
    WHERE o.customer_id = c.customer_id
      AND o.total > 300
);

