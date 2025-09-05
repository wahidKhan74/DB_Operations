-- DCL / TCL (Data Control & Transaction Control Language)

-- DCL – Data Control Language : Used to control access/permissions on database objects (GRANT, REVOKE).

-- Grant SELECT privilege on employees table to hr_user
GRANT SELECT ON employees TO 'hr_user'@'localhost';

-- Grant INSERT and UPDATE privilege on departments to hr_manager
GRANT INSERT, UPDATE ON departments TO 'hr_manager'@'localhost';

-- Revoke DELETE privilege from hr_user
REVOKE DELETE ON employees FROM 'hr_user'@'localhost';

-- Grant all privileges on payroll to payroll_admin
GRANT ALL PRIVILEGES ON payroll TO 'payroll_admin'@'localhost';

-- TCL – Transaction Control Language :: Used to manage transactions (COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION).

-- Start a transaction
START TRANSACTION;

-- Example: Salary update + Payroll log insert
UPDATE employees SET salary = salary + 5000 WHERE emp_id = 3;

INSERT INTO payroll (emp_id, pay_date, basic_salary, bonus, deductions, net_salary)
VALUES (3, CURDATE(), 85000, 5000, 0, 90000);

-- Commit changes (make permanent)
COMMIT;

-- Rollback example (undo last transaction)
ROLLBACK;


-- Using SAVEPOINT inside a transaction
START TRANSACTION;

UPDATE employees SET salary = salary + 2000 WHERE emp_id = 1;
SAVEPOINT before_bonus;

UPDATE employees SET salary = salary + 1000 WHERE emp_id = 1;  -- bonus applied

-- Something goes wrong, rollback to savepoint
ROLLBACK TO before_bonus;

-- Commit the first update
COMMIT;