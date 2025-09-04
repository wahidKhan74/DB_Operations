-- insert data into customer table
INSERT INTO customers(name, phone, email) VALUES('John Doe', '9000000011', 'john.doe@gmail.com');

INSERT INTO customers(name, phone, email) VALUES 
('David Johnson', '9000000018', 'david.johnson@yahoo.com'),
('Priya Sharma', '9000000012', 'priya.sharma@gmail.com'),
('Meena Reddy', '9000000019', 'meena.reddy@gmail.com'),
('Suresh Kumar', '9000000020', 'suresh.kumar@rediffmail.com'),
('Ali Khan', '9000000013', 'ali.khan@yahoo.com'),
('Ravi Patel', '9000000014', 'ravi.patel@outlook.com'),
('Sneha Iyer', '9000000015', 'sneha.iyer@gmail.com'),
('Amit Verma', '9000000016', 'amit.verma@hotmail.com');

-- insert data into suplier table

INSERT INTO suppliers (name, phone, email, address) VALUES
('ABC Pharma Distributors', '9876543210', 'contact@abcpharma.com', 'Andheri East, Mumbai, Maharashtra'),
('MediSupply Pvt Ltd', '9123456780', 'sales@medisupply.in', 'Connaught Place, New Delhi'),
('Global Health Supplies', '9988776655', 'support@globalhealth.com', 'Indiranagar, Bangalore, Karnataka'),
('Wellness Pharma', '9111122233', 'info@wellnesspharma.in', 'T. Nagar, Chennai, Tamil Nadu'),
('LifeCare Distributors', '9223344556', 'lifecare@distributors.com', 'Banjara Hills, Hyderabad, Telangana'),
('Sunshine Medical Supply', '9334455667', 'sales@sunshine.com', 'Shivaji Nagar, Pune, Maharashtra'),
('HealthPlus Pharma', '9445566778', 'contact@healthplus.com', 'Salt Lake, Kolkata, West Bengal'),
('TrustMed Distributors', '9556677889', 'trustmed@supplies.in', 'Navrangpura, Ahmedabad, Gujarat'),
('CareWell Pharma', '9667788990', 'carewell@pharma.com', 'Malviya Nagar, Jaipur, Rajasthan'),
('PrimeCure Suppliers', '9778899001', 'primecure@supply.com', 'Hazratganj, Lucknow, Uttar Pradesh');


INSERT INTO medicines (name, form, strength, manufacturer, supplier_id) VALUES
-- Pain / Fever
('Paracetamol', 'Tablet', '500mg', 'Cipla', 1),
('Ibuprofen', 'Tablet', '400mg', 'Sun Pharma', 2),
('Diclofenac', 'Tablet', '50mg', 'Dr. Reddy’s', 3),

-- Antibiotics
('Amoxicillin', 'Capsule', '250mg', 'GSK', 1),
('Azithromycin', 'Tablet', '500mg', 'Cipla', 2),
('Cefixime', 'Tablet', '200mg', 'Lupin', 4),

-- Anti-allergy
('Cetirizine', 'Tablet', '10mg', 'Zydus', 5),
('Loratadine', 'Tablet', '10mg', 'Sun Pharma', 2),

-- Diabetes
('Metformin', 'Tablet', '500mg', 'Lupin', 4),
('Gliclazide', 'Tablet', '80mg', 'Dr. Reddy’s', 3),

-- Gastric / Acidity
('Omeprazole', 'Capsule', '20mg', 'Torrent', 1),
('Pantoprazole', 'Tablet', '40mg', 'Cipla', 2),

-- Hypertension
('Amlodipine', 'Tablet', '5mg', 'Sun Pharma', 5),
('Losartan', 'Tablet', '50mg', 'Cipla', 1),

-- Cough / Cold
('Dextromethorphan Syrup', 'Syrup', '100ml', 'Zydus', 3);

