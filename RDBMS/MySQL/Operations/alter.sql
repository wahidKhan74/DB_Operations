-- store customers data in pharmacy_app
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    phone VARCHAR(50),
    email VARCHAR(200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- add colum as date_of_birth
ALTER TABLE customers ADD column date_of_birth DATE;

ALTER TABLE customers ADD column age INT AFTER email;

ALTER TABLE customers MODIFY column age TINYINT;

ALTER TABLE customers CHANGE column create_at created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE customers drop column date_of_birth;

ALTER TABLE customers ADD CONSTRAINT unique_email UNIQUE (email);

ALTER TABLE customers RENAME TO bk_customers;
