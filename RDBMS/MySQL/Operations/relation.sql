-- Add  constraints now that all referenced PKs and FKs.

-- medicines.supplier_id -> suppliers.supplier_id
ALTER TABLE medicines 
ADD CONSTRAINT fk_medicines_supplier FOREIGN KEY (supplier_id) 
REFERENCES suppliers(supplier_id) ON UPDATE CASCADE ON DELETE SET NULL;

-- sales_orders.customer_id -> customers.customer_id
ALTER TABLE sales_orders
  ADD CONSTRAINT fk_sales_orders_customer
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
    ON UPDATE CASCADE ON DELETE SET NULL;

-- sales_items.order_id -> sales_orders.order_id
ALTER TABLE sales_items
  ADD CONSTRAINT fk_sales_items_order
    FOREIGN KEY (order_id) REFERENCES sales_orders(order_id)
    ON UPDATE CASCADE ON DELETE CASCADE;