-- Simple Procedure – Fetch All Orders

DELIMITER $$
CREATE PROCEDURE get_all_orders()
BEGIN
	SELECT order_id, customer_id, order_datetime, total, payment_method, status 
    FROM pharmacy_app.sales_orders
    ORDER BY order_id;
END$$
DELIMITER ;

CALL get_all_orders();


-- IN Parameter – Orders by Customer

DELIMITER $$
CREATE PROCEDURE get_orders_by_customer_id(IN p_customer_id INT)
BEGIN
    SELECT order_id, customer_id, order_datetime, total, payment_method, status
    FROM pharmacy_app.sales_orders
    WHERE customer_id = p_customer_id
    ORDER BY order_datetime;
END$$
DELIMITER ;

CALL get_orders_by_customer_id(1);
CALL get_orders_by_customer_id(3);

-- IN + OUT Parameters – Total Sales for Customer

DELIMITER $$
CREATE PROCEDURE get_total_sales_by_customer_id(
    IN p_customer_id INT,
    OUT p_total_sales DECIMAL(12,2)
)
BEGIN
    SELECT IFNULL(SUM(total), 0) INTO p_total_sales
    FROM pharmacy_app.sales_orders
    WHERE customer_id = p_customer_id AND
    status = 'COMPLETED';
END$$
DELIMITER ;

CALL get_total_sales_by_customer_id(2, @total);
SELECT @total AS total_sales_for_customer;

-- INOUT Parameter – Update & Return Status for order mangement

DELIMITER $$
CREATE PROCEDURE update_order_status(
    IN p_order_id INT,
    INOUT p_status VARCHAR(30)
)
BEGIN

    -- update order status by match of orderid
    UPDATE pharmacy_app.sales_orders 
    SET status = p_status WHERE order_id = p_order_id ;

    -- return the updated status
    SELECT status INTO p_status FROM pharmacy_app.sales_orders 
    WHERE order_id = p_order_id ;

END$$
DELIMITER ;

SET @status = 'CANCELLED';
CALL update_order_status(15, @status);
SELECT @status AS updated_status;


-- Get Daily Sales 
DELIMITER $$

CREATE PROCEDURE GetDailySales(IN sale_date DATE)
BEGIN
    SELECT SUM(total) AS total_sales
    FROM sales_orders
    WHERE DATE(order_datetime) = sale_date;
END$$

DELIMITER ;

CALL get_daily_sales('2025-01-05 14:50:00');