-- 1.
CREATE DATABASE myDB;

 --2.
CREATE TABLE Customers (
CustomerID INT NOT NULL PRIMARY KEY,
FirstName VARCHAR(255),
LastName VARCHAR(255),
Email VARCHAR(255),
PhoneNumber VARCHAR(255),
ClassCode INT
)

-- 3.
ALTER TABLE Customers
ADD Age INT;

-- 5.
CREATE TABLE CustomerClass (
ClassCode INT NOT NULL PRIMARY KEY,
ClassDescription VARCHAR(255)
)

-- 6.
INSERT INTO CustomerClass (ClassCode, ClassDescription)
VALUES (1, 'Classsic');
INSERT INTO CustomerClass (ClassCode, ClassDescription)
VALUES (2, 'Gold');
INSERT INTO CustomerClass (ClassCode, ClassDescription)
VALUES (3, 'Platinum');

-- 7.
ALTER TABLE Customers
ADD CONSTRAINT FK_CusClass 
FOREIGN KEY (ClassCode) REFERENCES CustomerClass(ClassCode);

-- 4.
INSERT INTO Customers (CustomerID, FirstName, LastName, Age, Email, PhoneNumber, ClassCode)
VALUES (1, 'FirstA', 'LastA', 20, 'FirstA@gmail.com' , '0911234567', 1);
INSERT INTO Customers (CustomerID, FirstName, LastName, Age, Email, PhoneNumber, ClassCode)
VALUES (2, 'FirstB', 'LastB', 21, 'FirstB@hotmail.com' , '0929876543', 2);
INSERT INTO Customers (CustomerID, FirstName, LastName, Age, Email, PhoneNumber, ClassCode)
VALUES (3, 'FirstC', 'LastC', 22, 'FirstC@hotmail.com' , '0937894561', 3);
INSERT INTO Customers (CustomerID, FirstName, LastName, Age, Email, PhoneNumber, ClassCode)
VALUES (4, 'FirstD', 'LastD', 22, 'FirstD@gmail.com' , '0941253654', 2);

-- 8.
SELECT *
FROM Customers

--SELECT *
FROM CustomerClass

-- 9.
SELECT *
FROM Customers
WHERE FirstName = 'FirstD'

-- 10.
SELECT c.FirstName, c.LastName, c.Age, cc.ClassCode, cc.ClassDescription
FROM Customers c
JOIN CustomerClass cc
ON c.ClassCode = cc.ClassCode;

-- 11.
SELECT DISTINCT Age
FROM Customers;

-- 12.
SELECT *
FROM Customers
ORDER BY PhoneNumber

-- 13.
SELECT *
FROM Customers
WHERE Email LIKE '%hotmail%';

-- 14.
SELECT MAX(ClassCode) AS ClassCode
FROM CustomerClass

-- 15.
UPDATE Customers
SET Email = 'FirstA_new@gmail.com'
WHERE CustomerID = 1;

-- 16.
DELETE Customers
WHERE FirstName = 'FirstD';

-- 17.
CREATE VIEW CustomerDetail  AS
SELECT c.FirstName, c.LastName, c.Age, c.Email, c.PhoneNumber, cc.ClassDescription
FROM Customers c
JOIN CustomerClass cc
ON c.ClassCode = cc.ClassCode

-- 18.
SELECT *
FROM CustomerDetail;




