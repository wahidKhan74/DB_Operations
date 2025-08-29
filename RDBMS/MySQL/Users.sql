-- Shows the user + host for the current session
> SELECT USER();
-- Shows the authenticated user (may differ if using proxy)
> SELECT CURRENT_USER();
-- Shows all users in the MySQL instance
> SELECT user, host FROM mysql.user;


-- 1. Create User:
-- Create user with localhost only
CREATE USER 'devuser'@'localhost' IDENTIFIED BY 'pass1234';

-- Create user with any host
CREATE USER 'reportuser'@'%' IDENTIFIED BY 'securePass!';

-- 2. Granting Privileges:
-- Grant all privileges on all database
GRANT ALL PRIVILEGES ON *.* TO 'devuser'@'localhost' WITH GRANT OPTION;

-- Grant read-only access to a specific database
GRANT SELECT ON mydatabase.* TO 'reportuser'@'%';

-- read , update and insert access to a specific table
GRANT SELECT, INSERT, UPDATE ON mydatabase.mytable TO 'reportuser'@'%';

-- 3. Flush Privileges:
FLUSH PRIVILEGES;

-- 4. Drop User:
DROP USER 'devuser'@'localhost';
DROP USER 'reportuser'@'%';


> mysql -u devuser -p -h localhost
Enter password: pass1234