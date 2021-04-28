--1
CREATE DATABASE myDB;

USE myDB;
GO

--2 
CREATE TABLE Customers (
	CustomerID int NOT NULL,
	FirstName varchar(255),
	LastName varchar(255),
	Email varchar(255),
	PhoneNumber varchar(255),
	ClassCode int,
	PRIMARY KEY (CustomerID)
);
/* cannot set FK because CustomerClass Table is not created
so i will set FK after creating CustomerClass Table */

--3
ALTER TABLE Customers
ADD Age int;

--4
INSERT INTO Customers(CustomerID, FirstName, LastName, Age, Email, PhoneNumber, ClassCode)
VALUES (1, 'FirstA', 'LastA', 20, 'FirstA@gmail.com', '0911234567', 1), 
(2, 'FirstB', 'LastB', 21, 'FirstB@hotmail.com', '0929876543', 2),
(3, 'FirstC', 'LastC', 22, 'FirstC@hotmail.com', '0937894561', 3), 
(4, 'FirstD', 'LastD', 22, 'FirstD@gmail.com', '0941253654', 2);

--5
CREATE TABLE CustomerClass(
	ClassCode int NOT NULL,
	ClassDescription varchar(255),
	PRIMARY KEY (ClassCode)
);

--6
INSERT INTO CustomerClass(ClassCode, ClassDescription)
VALUES (1, 'Classsic'), (2, 'Gold'), (3, 'Platinum')

--7
ALTER TABLE Customers
ADD CONSTRAINT FK_CustomerClass
FOREIGN KEY (ClassCode) REFERENCES CustomerClass(ClassCode);

--8
SELECT * 
FROM Customers
FULL JOIN CustomerClass
ON Customers.ClassCode = CustomerClass.ClassCode;

--9
SELECT *
FROM Customers
WHERE FirstName = 'FirstD';

--10
SELECT FirstName, LastName, Age, Customers.ClassCode, ClassDescription
FROM Customers 
FULL JOIN CustomerClass
ON Customers.ClassCode = CustomerClass.ClassCode;

--11
SELECT DISTINCT Age
FROM Customers;

--12
SELECT *
FROM Customers
ORDER BY PhoneNumber;

--13
SELECT *
FROM Customers
WHERE Email LIKE '%hotmail%';

--14
SELECT *
FROM CustomerClass
WHERE ClassCode IN (SELECT MAX(ClassCode) FROM CustomerClass);

--15
UPDATE Customers
SET Email = 'FirstA@windowslive.com'
WHERE CustomerID = 1;
/* FirstA@gmail.com -> FirstA@windowslive */

--16
DELETE FROM Customers
WHERE FirstName = 'FirstD';

--17
CREATE VIEW [CustomerDetail] AS
SELECT FirstName, LastName, Age, Email, PhoneNumber, ClassDescription
FROM Customers 
FULL JOIN CustomerClass
ON Customers.ClassCode = CustomerClass.ClassCode;

--18
SELECT *
FROM [CustomerDetail]
