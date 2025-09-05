-- Select all employees
SELECT * FROM employees;

-- Select employee names and salaries
SELECT first_name, last_name, salary FROM employees;

-- Find highest paid employee
SELECT first_name, last_name, salary FROM employees ORDER BY salary DESC LIMIT 1;

-- Employees in IT department
SELECT e.first_name, e.last_name, d.dept_name FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE d.dept_name = 'IT';
