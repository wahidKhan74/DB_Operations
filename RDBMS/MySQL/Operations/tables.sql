CREATE database IF NOT EXISTS pharmacy_app;
USE pharmacy_app;

-- store customers data in pharmacy_app
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    phone VARCHAR(50),
    email VARCHAR(200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- store medicines data
CREATE TABLE medicines (
  medicine_id   INT AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(200) NOT NULL,
  form          VARCHAR(100),
  strength      VARCHAR(100),
  manufacturer  VARCHAR(200),
  supplier_id   INT,   -- will be FK later
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- store suppliers data
CREATE TABLE suppliers (
  supplier_id   INT AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(200) NOT NULL,
  phone         VARCHAR(50),
  email         VARCHAR(200),
  address       VARCHAR(300),
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- store sales_orders data
CREATE TABLE sales_orders (
  order_id        INT AUTO_INCREMENT PRIMARY KEY,
  customer_id     INT,   -- FK later
  order_datetime  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  total           DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  payment_method  VARCHAR(30) NOT NULL DEFAULT 'CASH',
  status          VARCHAR(30) NOT NULL DEFAULT 'NEW'
);

-- store sales_items data
CREATE TABLE sales_items (
  order_id      INT NOT NULL,
  line_no       INT NOT NULL,
  batch_id      INT NOT NULL,
  medicine_id   INT NOT NULL,
  qty           INT NOT NULL,
  sale_price    DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (order_id, line_no)
);