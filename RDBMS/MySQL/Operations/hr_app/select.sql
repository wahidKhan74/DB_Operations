-- Select all employees
SELECT * FROM employees;

-- All employees with salary greater than 70,000
SELECT emp_id, first_name, last_name, salary 
FROM employees
WHERE salary > 70000;

-- Employees hired after 2022
SELECT first_name, last_name, hire_date 
FROM employees
WHERE hire_date > '2022-01-01';

-- Employees in 'Human Resources' department
SELECT first_name, last_name, dept_id
FROM employees
WHERE dept_id = (
    SELECT dept_id FROM departments WHERE dept_name = 'Human Resources'
);

-- Employees whose name starts with 'A'
SELECT emp_id, first_name, last_name 
FROM employees
WHERE first_name LIKE 'A%';

-- Employees whose name end with 'd'
SELECT emp_id, first_name, last_name 
FROM employees
WHERE first_name LIKE '%d';


-- Employees whose name have matching characters 'Jd'
SELECT emp_id, first_name, last_name 
FROM employees
WHERE first_name LIKE '%Jd%';

-- All departments located in New York
SELECT dept_id, dept_name, location 
FROM departments
WHERE location = 'New York';


-- Departments that are NOT in London
SELECT dept_id, dept_name 
FROM departments
WHERE location <> 'London';

-- Department name containing 'IT'
SELECT dept_id, dept_name 
FROM departments
WHERE dept_name LIKE '%IT%';

-- Payroll entries for March 2024
SELECT emp_id, pay_date, net_salary 
FROM payroll
WHERE MONTH(pay_date) = 3 AND YEAR(pay_date) = 2024;

-- Employees with bonus greater than 2000
SELECT emp_id, pay_date, bonus 
FROM payroll
WHERE bonus > 2000;