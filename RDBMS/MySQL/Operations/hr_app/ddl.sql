-- DDL (Data Definition Language)

-- create database
> CREATE DATABASE IF NOT EXISTS hr_management_app;
> USE hr_management_app;

-- create tables
-- Create Departments Table
CREATE TABLE departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL,
    location VARCHAR(100)
);

-- Create Employees Table
CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    email VARCHAR(150) UNIQUE,
    salary DECIMAL(10,2),
    emergency_contact  VARCHAR(100),
    hire_date DATE,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);


-- Leaves table
CREATE TABLE leaves (
    leave_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    leave_type ENUM('Sick', 'Casual', 'Paid', 'Unpaid') NOT NULL,
    start_date DATE,
    end_date DATE,
    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
);

-- Payroll table
CREATE TABLE payroll (
    payroll_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    pay_date DATE,
    basic_salary DECIMAL(10,2),
    bonus DECIMAL(10,2),
    deductions DECIMAL(10,2),
    net_salary DECIMAL(10,2),
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
);

-- Alter Queries 
-- Alter table (Add a column for job title)
ALTER TABLE employees ADD COLUMN job_title VARCHAR(100);

-- Add date_of_birth, phone column to employees
ALTER TABLE employees ADD COLUMN date_of_birth DATE AFTER email;
ALTER TABLE employees ADD COLUMN phone VARCHAR(30) AFTER email;

-- decrease length of email column
ALTER TABLE employees MODIFY email VARCHAR(100);

-- Rename column in employees table
ALTER TABLE employees CHANGE COLUMN phone mobile_number VARCHAR(30);
-- Rename dept_name to department_name
ALTER TABLE departments CHANGE COLUMN dept_name department_name VARCHAR(100);

ALTER TABLE departments CHANGE COLUMN department_name dept_name VARCHAR(100);

-- Remove emergency_contact from employees
ALTER TABLE employees DROP COLUMN emergency_contact;


-- Make email mandatory in employees
ALTER TABLE employees MODIFY email VARCHAR(150) NOT NULL;

-- Add unique constraint on email
ALTER TABLE employees MODIFY email VARCHAR(150) NOT NULL UNIQUE;


-- Rename employees to staff
ALTER TABLE employees RENAME TO staff;

-- Rename back to employees
ALTER TABLE staff RENAME TO employees;

