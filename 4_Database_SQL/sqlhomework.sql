CREATE DATABASE myDB;


CREATE TABLE Customers (
    CustomerID int,
    FirstName varchar(255),
    LastName varchar(255),
    Email varchar(255),
    PhoneNumber varchar(255),
    CustomerClass int
);


ALTER TABLE Customers
ADD Age int;


INSERT INTO Customers (CustomerID, FirstName, Email, PhoneNumber, CustomerClass)
VALUES (1, FirstA, LastA, 20 ,FirstA@gmail.com,0911234567,1);
INSERT INTO Customers (CustomerID, FirstName, Email, PhoneNumber, CustomerClass)
VALUES (2, FirstB, LastB, 21 ,FirstB@hotmail.com,0929876543,2);
INSERT INTO Customers (CustomerID, FirstName, Email, PhoneNumber, CustomerClass)
VALUES (3, FirstC, LastC, 22 ,FirstC@hotmail.com,0937894561,3);
INSERT INTO Customers (CustomerID, FirstName, Email, PhoneNumber, CustomerClass)
VALUES (4, FirstD, LastD, 22 ,FirstD@hotmail.com,0941253654,2);


CREATE TABLE CustomerClass (
   ClassCode int,
   ClassDescription varchar(255),
);


INSERT INTO CustomerClass (ClassCode, ClassDescription) 
VALUES (1, Classsic);
INSERT INTO CustomerClass (ClassCode, ClassDescription) 
VALUES (2, Gold);
INSERT INTO CustomerClass (ClassCode, ClassDescription) 
VALUES (3, Platinum);


ALTER TABLE Customer 
ADD CONSTRAINT CustomerClass 
FOREIGN KEY (CustomerID) REFERENCES  Customer(CustomerID);
ALTER TABLE CustomerClass 
ADD CONSTRAINT ClassCode 
FOREIGN KEY (ClassCode) REFERENCES  CustomerClass(ClassCode);


SELECT *  
FROM Customer JOIN CustomerClass ON Customer.CustomerID = CustomerClass.ClassCode


SELECT FirstName FROM Customers
WHERE  FirstName = FirstD;


SELECT FirstName,LastName,Age,ClassCode,ClassDescription FROM Customer JOIN CustomerClass ON Customer.CustomerID = CustomerClass.ClassCode


SELECT Age 
FROM Customer 


SELECT * FROM Customer ORDER BY PhoneNumber ASC;


SELECT * FROME Customer
WHERE Email = Hotmail


SELECT MAX(ClassCode) AS ClassCode FROM CustomerClass


UPDATE Customer
SET Email = ‘FirstA@gmail.com’
WHERE CustomerID = 1;


DELETE Customers Where First = FirstID


CREATE VIEW CustomerDetail AS SELECT FirstName ,Age ,Email,PhoneNumber,ClassDescription 
FROM Customer JOIN CustomerClass 
ON Customer.ClassCode = CustomerClass.ClassCode


SELECT * FROM CustomerDetail





