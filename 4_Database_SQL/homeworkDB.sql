CREATE DATABASE myDB;

CREATE TABLE Customers (
	CustomerID  int NOT NULL PRIMARY KEY,
	FirstName varchar(255),
	LastName varchar(255),
	Email varchar(255),
	PhoneNumber varchar(255),
	ClassCode int 
)

ALTER TABLE Customers  ADD Age int;

INSERT INTO Customers (CustomerID, FirstName, LastName, Age, Email, PhoneNumber, ClassCode)
VALUES (1, 'FirstA', 'LastA',20, 'FirstA@gmail.com', '0911234567', 1),
	   (2, 'FirstB', 'LastB',21, 'FirstB@hotmail.com', '0929876543', 2),
	   (3, 'FirstC', 'LastC',22, 'FirstC@hotmail.com', '0929876543', 3),
	   (4, 'FirstD', 'LastD',22, 'FirstD@gmail.com', '0941253654', 2);

CREATE TABLE CustomerClass (
	ClassCode int NOT NULL PRIMARY KEY,
	ClassDescription varchar(255)
)

INSERT INTO CustomerClass (ClassCode,ClassDescription)
VALUES (1, 'Classsic'),(2, 'Gold'), (3, 'Platiumn')

ALTER TABLE Customers
ADD CONSTRAINT FK_CustomerClass
FOREIGN KEY (ClassCode) REFERENCES CustomerClass(ClassCode);

SELECT * FROM Customers
FULL OUTER JOIN CustomerClass
ON Customers.ClassCode = CustomerClass.ClassCode;

SELECT * FROM Customers
WHERE FirstName = 'FirstD'

SELECT FirstName, LastName, Age , CustomerClass.ClassCode ,CustomerClass.ClassDescription
FROM Customers
FULL  JOIN CustomerClass 
ON Customers.CustomerID=CustomerClass.ClassCode

SELECT DISTINCT Age 
FROM Customers

SELECT * FROM Customers
ORDER BY PhoneNumber ;

SELECT * FROM Customers
WHERE Email LIKE '%hotmail%';

SELECT MAX(ClassCode ) AS ClassCode 
FROM CustomerClass; 

UPDATE Customers
SET Email = 'FirstA@gmail.com'
WHERE CustomerID = 1;

DELETE FROM Customers WHERE FirstName = 'FirstD'

CREATE VIEW [ CustomerDetail ] AS
SELECT FirstName, LastName, Age, Email, PhoneNumber, ClassDescription
FROM Customers 
FULL JOIN CustomerClass
ON Customers.ClassCode = CustomerClass.ClassCode;

SELECT * FROM [ CustomerDetail ]
