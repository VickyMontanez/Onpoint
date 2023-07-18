-- Active: 1687910467964@@localhost@3306@onpoint
CREATE DATABASE onpoint;
SHOW DATABASES;
USE onpoint;
DROP TABLE teachers;
CREATE TABLE teachers(
    teacher_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    teacher_name VARCHAR(50) NOT NULL,
    teacher_specialty VARCHAR(50) NOT NULL,
    teacher_phone VARCHAR(20) NOT NULL,
    teacher_age INTEGER,
    teacher_gender ENUM("Male", "Female", "Other"),
    teacher_email VARCHAR(100),
    teacher_address VARCHAR(250)
);
CREATE TABLE classes(
    class_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(50) NOT NULL,
    class_teacher_id INTEGER NOT NULL,
    FOREIGN KEY (class_teacher_id) REFERENCES teachers(teacher_id)
);
CREATE TABLE students(
    student_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    student_class_id INTEGER NOT NULL,
    FOREIGN KEY (student_class_id) REFERENCES classes(class_id),
    student_age INTEGER,
    student_gender ENUM("Male", "Female", "Other"),
    student_phone VARCHAR(20),
    student_email VARCHAR(100),
    student_address VARCHAR(250)
);
CREATE TABLE bonus_points(
    bp_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    bp_amount INTEGER NOT NULL,
    bp_comments VARCHAR(250) NOT NULL,
    bp_student_id INTEGER NOT NULL,
    FOREIGN KEY (bp_student_id) REFERENCES students(student_id),
    bp_created_by INTEGER NOT NULL,
    FOREIGN KEY (bp_created_by) REFERENCES teachers(teacher_id),
    bp_created_at TIMESTAMP,
    bp_updated_by INTEGER NOT NULL,
    FOREIGN KEY (bp_updated_by) REFERENCES teachers(teacher_id),
    bp_updated_at TIMESTAMP
);

SHOW TABLES;
INSERT INTO students (student_id, student_name, student_class_id, student_age, student_gender, student_phone, student_email,student_address)
VALUES
  (1, 'John Smith', 1, 18, 'Male', '1234567890', 'john.smith@example.com', '123 Main St'),
  (2, 'Emma Johnson', 1, 17, 'Female', '9876543210', 'emma.johnson@example.com', '456 Elm St'),
  (3, 'Michael Davis', 2, 19, 'Male', '5555555555', 'michael.davis@example.com', '789 Oak St'),
  (4, 'Sophia Anderson', 2, 16, 'Female', '4444444444', 'sophia.anderson@example.com', '567 Pine St'),
  (5, 'David Wilson', 3, 17, 'Male', '1111111111', 'david.wilson@example.com', '789 Maple Ave'),
  (6, 'Olivia Thompson', 3, 18, 'Female', '2222222222', 'olivia.thompson@example.com', '345 Cedar Ave'),
  (7, 'James Taylor', 4, 16, 'Male', '7777777777', 'james.taylor@example.com', '901 Oak Ave'),
  (8, 'Ava Thomas', 4, 17, 'Female', '6666666666', 'ava.thomas@example.com', '678 Elm Ave'),
  (9, 'Daniel Martinez', 5, 18, 'Male', '3333333333', 'daniel.martinez@example.com', '234 Pine Ave'),
  (10, 'Mia Hernandez', 5, 16, 'Female', '8888888888', 'mia.hernandez@example.com', '567 Maple Blvd');

INSERT INTO teachers(teacher_id,teacher_name,teacher_specialty,teacher_phone,teacher_age,teacher_gender,teacher_email,teacher_address) VALUES
  (1, 'John Johnson', 'Mathematics', '1234567890', 35, 'Male', 'john.johnson@example.com', '123 Main St'),
  (2, 'Emma Davis', 'Science', '9876543210', 32, 'Female', 'emma.davis@example.com', '456 Elm St'),
  (3, 'Michael Smith', 'History', '5555555555', 40, 'Male', 'michael.smith@example.com', '789 Oak St'),
  (4, 'Sophia Anderson', 'English', '4444444444', 38, 'Female', 'sophia.anderson@example.com', '567 Pine St'),
  (5, 'David Wilson', 'Physical Education', '1111111111', 37, 'Male', 'david.wilson@example.com', '789 Maple Ave'),
  (6, 'Olivia Thompson', 'Art', '2222222222', 33, 'Female', 'olivia.thompson@example.com', '345 Cedar Ave'),
  (7, 'James Taylor', 'Music', '7777777777', 36, 'Male', 'james.taylor@example.com', '901 Oak Ave'),
  (8, 'Ava Thomas', 'Computer Science', '6666666666', 34, 'Female', 'ava.thomas@example.com', '678 Elm Ave'),
  (9, 'Daniel Martinez', 'Foreign Languages', '3333333333', 39, 'Male', 'daniel.martinez@example.com', '234 Pine Ave'),
  (10, 'Mia Hernandez', 'Social Studies', '8888888888', 31, 'Female', 'mia.hernandez@example.com', '567 Maple Blvd');

INSERT INTO classes (class_id, class_name, class_teacher_id) 
VALUES
  (1, 'Mathematics', 1),
  (2, 'Science', 2),
  (3, 'History', 3),
  (4, 'English', 4),
  (5, 'Physical Education', 5),
  (6, 'Art', 6),
  (7, 'Music', 7),
  (8, 'Computer Science', 8),
  (9, 'Foreign Languages', 9),
  (10, 'Social Studies', 10);

INSERT INTO bonus_points (bp_id, bp_amount, bp_comments, bp_student_id, bp_created_by, bp_created_at, bp_updated_by, bp_updated_at) VALUES
  (1, 5, 'Excellent work!', 1, 3, '2023-07-01 09:15:00', 3, '2023-07-01 09:15:00'),
  (2, 10, 'Outstanding performance!', 2, 4, '2023-07-02 14:30:00', 4, '2023-07-02 14:30:00'),
  (3, 3, 'Great improvement!', 3, 5, '2023-07-03 10:45:00', 5, '2023-07-03 10:45:00'),
  (4, 8, 'Impressive effort!', 4, 6, '2023-07-04 11:20:00', 6, '2023-07-04 11:20:00'),
  (5, 6, 'Well done!', 5, 7, '2023-07-05 16:55:00', 7, '2023-07-05 16:55:00'),
  (6, 4, 'Keep up the good work!', 6, 8, '2023-07-06 13:10:00', 8, '2023-07-06 13:10:00'),
  (7, 7, 'Impressive improvement!', 7, 9, '2023-07-07 12:45:00', 9, '2023-07-07 12:45:00'),
  (8, 2, 'Nice effort!', 8, 10, '2023-07-08 15:30:00', 10, '2023-07-08 15:30:00'),
  (9, 9, 'Well deserved!', 9, 1, '2023-07-09 17:20:00', 1, '2023-07-09 17:20:00'),
  (10, 5, 'Great job!', 10, 2, '2023-07-10 11:55:00', 2, '2023-07-10 11:55:00');

