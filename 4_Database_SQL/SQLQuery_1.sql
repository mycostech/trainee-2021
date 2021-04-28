-- 1.
CREATE DATABASE myDB;

-- 2.
CREATE TABLE Customers(
    CustomerID INT NOT NULL,
    FirstName  VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255),
    PhoneNumber VARCHAR(255),
    CustomerClass INT
    CONSTRAINT PK_CustomerID PRIMARY KEY(CustomerID)
)

-- 3.
ALTER TABLE Customers
ADD Age INT;


-- 4.
INSERT INTO Customers (CustomerID, FirstName, LastName, Age, Email, PhoneNumber, CustomerClass)
VALUES (1,'FirstA', 'LastA', 20, 'FirstA@gmail.com', '0911234567',1)
INSERT INTO Customers (CustomerID, FirstName, LastName, Age, Email, PhoneNumber, CustomerClass)
VALUES (2,'FirstB', 'LastB', 21, 'FirstB@hotmail.com', '0929876543',2)
INSERT INTO Customers (CustomerID, FirstName, LastName, Age, Email, PhoneNumber, CustomerClass)
VALUES (3,'FirstC', 'LastC', 22, 'FirstC@hotmail.com', '0937894561',3)


-- 5.
CREATE TABLE CustomerClass(
    ClassCode INT NOT NULL,
    ClassDescription VARCHAR(255)
    CONSTRAINT PK_ClassCode PRIMARY KEY(ClassCode)
)


-- 6.
INSERT INTO CustomerClass (ClassCode, ClassDescription)
VALUES(1, 'Classsic')
INSERT INTO CustomerClass (ClassCode, ClassDescription)
VALUES(2, 'Gold')
INSERT INTO CustomerClass (ClassCode, ClassDescription)
VALUES(3, 'Platinum')


-- 7.
ALTER TABLE Customers
ADD FOREIGN KEY (CustomerClass) REFERENCES CustomerClass(ClassCode)


-- 8.
SELECT *
FROM Customers

SELECT *
FROM CustomerClass

-- 9.
SELECT *
FROM Customers 
WHERE FirstName  LIKE 'FirstD%'


-- 10.
SELECT C.FirstName, C.LastName, C.Age, CC.ClassCode, CC.ClassDescription 
FROM Customers C
INNER JOIN CustomerClass CC ON
C.CustomerClass = CC.ClassCode


-- 11.
SELECT DISTINCT Age ,FirstName, LastName, Email, PhoneNumber
FROM Customers


-- 12.
SELECT *
FROM Customers
ORDER BY PhoneNumber

-- 13.
SELECT *
FROM Customers
WHERE Email LIKE '%@hotmail%'


-- 14.
SELECT Max(ClassCode)
FROM CustomerClass



-- 15.
UPDATE Customers
SET Email = 'FirstAAAA@hotmail.com'
WHERE Customers.CustomerID = 1


-- 16.
DELETE FROM Customers 
WHERE FirstName = 'FirstD'


-- 17.
CREATE VIEW CustomerDetail AS
SELECT c.FirstName, c.LastName ,c.Age, c.Email, c.PhoneNumber, cc.ClassDescription
FROM Customers c
INNER JOIN CustomerClass cc
ON c.CustomerClass = cc.ClassCode


-- 18.
SELECT *
FROM CustomerDetail


