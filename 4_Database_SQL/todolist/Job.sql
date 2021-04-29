CREATE TABLE Job (
    ID int NOT NULL,
    DateOfWork  DATE ,
    Activity varchar(255),
    StartTime TIME,
    EndTime TIME,
    WorkStatus varchar(255),
    Comment varchar(255),
    PRIMARY KEY (ID)
);


INSERT INTO Job 
VALUES ('001',convert(date,'2021-04-29'),'Design the database', '11:00', '13:30', 'Not finished', 'No');

INSERT INTO Job 
VALUES ('002',convert(date,'2021-04-30'),'Do homework', '09:00', '12:30', 'Not finished', 'No');

INSERT INTO Job 
VALUES ('003',convert(date,'2021-05-02'),'Read books', '08:00', '09:30', 'Not finished', 'No');

INSERT INTO Job 
VALUES ('004',convert(date,'2021-05-01'),'Install program', '10:00', '12:00', 'Not finished', 'No');