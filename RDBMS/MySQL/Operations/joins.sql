-- Joins : Collect data from two or more tables based on common column
-- example : employee (dept_id) and departments (dept_id)

-- 1. INNER JOIN : Returns only employees who have a matching department.

SELECT e.emp_id, e.first_name, e.last_name, d.dept_name, d.location 
from employee e INNER JOIN departments d ON e.dept_id = d.dept_id;

-- 2. LEFT JOIN (LEFT OUTER JOIN) : Returns all employees(left table), even if they are not assigned to a department.
SELECT e.emp_id, e.first_name, e.last_name, d.dept_name, d.location
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;


-- 3. RIGHT JOIN (RIGHT OUTER JOIN) :: Returns all departments(right table), even if no employees are assigned.
SELECT e.emp_id, e.first_name, e.last_name, d.dept_name, d.location
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;


-- 4. FULL OUTER JOIN : Returns all employees and departments (matched + unmatched).
SELECT e.emp_id, e.first_name, e.last_name, d.dept_name, d.location
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id
UNION
SELECT e.emp_id, e.first_name, e.last_name, d.dept_name, d.location
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;

-- 5. CROSS / Cartesian JOIN : returns all combinations of employees and departments (Cartesian product).
SELECT e.emp_id, e.first_name, d.dept_name
FROM employees e
CROSS JOIN departments d;
