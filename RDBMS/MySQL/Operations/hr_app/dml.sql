-- Insert sample departments
INSERT INTO departments (department_name, location) 
VALUES ('Human Resources', 'New York'),
       ('Finance', 'London'),
       ('IT', 'San Francisco');

-- Insert employees
INSERT INTO employees (first_name, last_name, email, salary, hire_date, dept_id, job_title) 
VALUES ('Alice', 'Johnson', 'alice.johnson@hrapp.com', 60000, '2022-01-15', 1, 'HR Manager'),
       ('Bob', 'Smith', 'bob.smith@hrapp.com', 75000, '2021-06-20', 2, 'Financial Analyst'),
       ('Charlie', 'Brown', 'charlie.brown@hrapp.com', 85000, '2023-03-10', 3, 'Software Engineer');

-- update
UPDATE employees SET salary= salary+5000 where emp_id=1;

-- delete
DELETE FROM employees WHERE emp_id = 2;
