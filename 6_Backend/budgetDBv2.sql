--CREATE TABLE Customer(
--user_id int not null IDENTITY(1,1) primary key,
--firstname varchar(255),
--lastname varchar(255),
--username varchar(255) not null UNIQUE,
--email varchar(255) not null UNIQUE,
--password varchar(255) not null
--)

--CREATE TABLE Transaction_(
--transaction_id int not null IDENTITY(1,1) primary key,
--date DATE not null,
--user_id int
--CONSTRAINT FK_userid not null FOREIGN KEY (user_id)
--REFERENCES Customer(user_id)
--)

--CREATE TABLE Category(
--category_id int not null IDENTITY(1,1) primary key,
--category_name varchar(255) not null,
--)

--CREATE TABLE Type(
--type_id int not null IDENTITY(1,1) primary key,
--type_name varchar(255) not null,
--category_id int
--CONSTRAINT FK_category not null FOREIGN KEY (category_id)
--REFERENCES Category(category_id)
--)

--CREATE TABLE Transaction_Detail(
--transactionDe_id int not null IDENTITY(1,1) primary key,
--amount int not null,
--note varchar(255),
--transaction_id int
--CONSTRAINT FK_transactionInDe not null FOREIGN KEY (transaction_id)
--REFERENCES Transaction_(transaction_id),
--type_id int 
--CONSTRAINT FK_type not null FOREIGN KEY (type_id)
--REFERENCES Type(type_id),
--)


--INSERT INTO Customer(firstname,lastname,username,email,password)
--VALUES('Yossawadee', 'Hoymala', 'yeolowbatt', 'yeolowbatt@gmail.com', '12345')
--INSERT INTO Customer(firstname,lastname,username,email,password)
--VALUES('Pongsathorn', 'Sukjareanjit', 'pongngi', 'pongngi@gmail.com', '12345')

--INSERT INTO Category(category_name)
--VALUES('รายรับ')
--INSERT INTO Category(category_name)
--VALUES('รายจ่าย')

--INSERT INTO Type(type_name,category_id)
--VALUES('เงินเดือน', 1)
--INSERT INTO Type(type_name,category_id)
--VALUES('ของขวัญ', 1)
--INSERT INTO Type(type_name,category_id)
--VALUES('เงินรางวัล', 1)
--INSERT INTO Type(type_name,category_id)
--VALUES('รายได้พิเศษ', 1)
--INSERT INTO Type(type_name,category_id)
--VALUES('เงินดอกเบี้ย', 1)
--INSERT INTO Type(type_name,category_id)
--VALUES('อื่นๆ', 1)
--INSERT INTO Type(type_name,category_id)
--VALUES('ถอนเงิน', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('ลงทุน', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('อาหาร', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('ชอปปิ้ง', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('การศึกษา', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('ครอบครัว', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('ค่ารักษาพยาบาล', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('บันเทิง', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('ท่องเที่ยว', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('การเดินทาง', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('บิล', 2)
--INSERT INTO Type(type_name,category_id)
--VALUES('อื่นๆ', 2)

--INSERT INTO Transaction_
--VALUES('2021-05-07', 1)
--INSERT INTO Transaction_
--VALUES('2021-05-08', 1)

--INSERT INTO Transaction_Detail
--VALUES(6500, 'เงินเดือนออกแล้วจ้า', 1, 1)
--INSERT INTO Transaction_Detail
--VALUES(60, 'ซื้อข้าว', 1, 8)
--INSERT INTO Transaction_Detail
--VALUES(10, 'ซื้อน้ำ', 2, 8)

--INSERT INTO Transaction_
--VALUES('2021-04-19', 2)

--INSERT INTO Transaction_Detail
--VALUES(1500, 'ชอปปิ้งเข้าบ้าน', 4, 9)

