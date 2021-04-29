CREATE DATABASE diaryApp

-- DROP TABLE Users
-- DROP TABLE Events


CREATE TABLE Users(
    id VARCHAR(255) NOT NULL,
    fname VARCHAR(255) ,
    lname VARCHAR(255) ,
    nickname VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL
    CONSTRAINT PK_users PRIMARY KEY (id)
)

CREATE TABLE Events(
    id INT NOT NULL IDENTITY(1,1),
    dateTime DATETIME NOT NULL,
    eventName VARCHAR(127) NOT NULL,
    memo VARCHAR(255),
    userId VARCHAR(255) NOT NULL
    CONSTRAINT PK_events PRIMARY KEY (id)
)

-- Add Foreign Key
ALTER TABLE Events
ADD CONSTRAINT FK_events 
FOREIGN KEY (userId)  
REFERENCES Users(id)


-- Register User
INSERT INTO Users (id, fname, lname, nickname, email, password, birthdate)
VALUES('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'sutimar', 'pengpinij', 'ying', 'yingstm@hotmail.com', '12345678', convert(date,'2018-10-20'))


-- Add event 1
INSERT INTO Events (dateTime, eventName, memo, userId)
VALUES ( convert(datetime,'18-06-12 10:34:09 PM',5), 'travel to A', 'Fun Fun Fun Fun', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')



-- Add event 2
INSERT INTO Events (dateTime, eventName, memo, userId)
VALUES ( convert(datetime,'20-06-12 10:34:09 PM',5), 'go to school', 'T ^ T', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')



-- Add event 3
INSERT INTO Events (dateTime, eventName, memo, userId)
VALUES ( convert(datetime,'15-09-12 10:34:09 PM',5), 'work from home', 'ba ba ba ba', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')



-- Create event list view
CREATE VIEW eventLists AS
SELECT e.dateTime, e.eventName, e.memo
FROM Events e
INNER JOIN Users u
ON e.userId = u.id


SELECT *
FROM eventLists