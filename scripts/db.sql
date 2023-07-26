-- Active: 1690396303605@@localhost@3306@onpoint

CREATE DATABASE onpoint;

SHOW DATABASES;

USE onpoint;

CREATE TABLE
    gender(
        gen_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        gen_name VARCHAR(100) NOT NULL,
        gen_abreviation VARCHAR(20) NOT NULL
    );

CREATE TABLE
    speciality(
        sp_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        sp_name VARCHAR(100) NOT NULL
    );

CREATE TABLE
    classes(
        class_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        class_name VARCHAR(100) NOT NULL
    );

CREATE TABLE
    roll(
        roll_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        roll_name VARCHAR(200) NOT NULL
    );

CREATE TABLE extra_points_type(
    ext_type_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ext_type_name VARCHAR(100) NOT NULL,
    ext_type_value INTEGER NOT NULL
);

CREATE TABLE
    users(
        user_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(50) NOT NULL,
        user_gender INT NOT NULL,
        FOREIGN KEY (user_gender) REFERENCES gender(gen_id),
        user_age INTEGER NOT NULL,
        user_address VARCHAR(250) NOT NULL,
        user_roll_id INTEGER NOT NULL,
        FOREIGN KEY (user_roll_id) REFERENCES roll(roll_id)
    );

CREATE TABLE
    contact_email(
        em_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        em_address VARCHAR(150) NOT NULL,
        em_type VARCHAR(20) NOT NULL,
        em_user_id INT NOT NULL,
        FOREIGN KEY (em_user_id) REFERENCES users(user_id)
    );

CREATE TABLE
    phone_numbers(
        ph_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        ph_num VARCHAR(20) NOT NULL,
        ph_type VARCHAR(50) NOT NULL,
        ph_user INTEGER NOT NULL,
        FOREIGN KEY (ph_user) REFERENCES users(user_id)
    );

CREATE TABLE
    user_speciality(
        user_speciality_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        sp_id INTEGER NOT NULL,
        FOREIGN KEY (sp_id) REFERENCES speciality(sp_id)
    );

CREATE TABLE
    user_class(
        user_class_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        class_id INTEGER NOT NULL,
        FOREIGN KEY (class_id) REFERENCES classes(class_id)
    );

CREATE TABLE teachers(
    teacher_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    teacher_user_id INTEGER NOT NULL,
    FOREIGN KEY (teacher_user_id) REFERENCES users(user_id)
);

CREATE TABLE
    students(
        student_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        student_user_id INTEGER NOT NULL,
        FOREIGN KEY (student_user_id) REFERENCES users(user_id)
    );

CREATE TABLE
    extra_points(
        ext_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        ext_teacher_id INTEGER NOT NULL,
        FOREIGN KEY (ext_teacher_id) REFERENCES teachers(teacher_id),
        ext_student_id INTEGER NOT NULL,
        FOREIGN KEY (ext_student_id) REFERENCES students(student_id),
        ext_class_id INTEGER NOT NULL,
        FOREIGN KEY (ext_class_id) REFERENCES classes(class_id),
        ext_type_id INTEGER NOT NULL,
        FOREIGN KEY (ext_type_id) REFERENCES extra_points_type(ext_type_id),
        ext_comments VARCHAR(200)
    );


/* ------------------------------------INSERT DATA-----------------------------------------------------------*/
INSERT INTO gender(gen_name, gen_abreviation) VALUES
('Male', 'M'),
('Female', 'F'),
('Non-Binary', 'NB'),
('Other', 'O');

INSERT INTO classes (class_name) VALUES
('Math 101'),
('History 201'),
('Science 301'),
('Literature 101'),
('Art 201'),
('Music 101'),
('Physics 201'),
('Chemistry 301'),
('Biology 101'),
('Geography 201');

INSERT INTO roll (roll_name) VALUES
('Professor'),
('Student'),
('Administrator');

INSERT INTO speciality (sp_name) VALUES
('Mathematics'),
('History'),
('Science'),
('Literature'),
('Art'),
('Music'),
('Physics'),
('Chemistry'),
('Biology'),
('Geography');

INSERT INTO users (user_name, user_gender, user_age, user_address, user_roll_id) VALUES
('John Doe', 1, 30, '123 Main St', 1),
('Jane Smith', 2, 28, '456 Oak Ave', 2),
('Alex Johnson', 1, 25, '789 Elm Rd', 2),
('Emily White', 2, 27, '1010 Cedar Ln', 3),
('Eric Garcia', 1, 29, '111 Maple Dr', 3),
('Maria Lopez', 2, 26, '222 Pine Blvd', 1),
('David Brown', 1, 32, '333 Birch Rd', 2),
('Lisa Wilson', 2, 31, '444 Oak St', 1),
('Sarah Taylor', 2, 28, '555 Elm Ave', 3),
('Chris Lee', 1, 30, '666 Cedar Ln', 2);

INSERT INTO phone_numbers (ph_num, ph_type, ph_user) VALUES
('+1 123-456-7890', 'Mobile', 1),
('+44 987654321', 'Work', 2),
('+61 333-444-555', 'Home', 3),
('+1 555-555-5555', 'Mobile', 4),
('+49 123-456-789', 'Work', 5),
('+33 987654321', 'Home', 6),
('+55 111-222-333', 'Mobile', 7),
('+1 666-777-8888', 'Work', 8),
('+61 444-555-666', 'Home', 9),
('+49 444-555-666', 'Mobile', 10);

INSERT INTO contact_email (em_address, em_type, em_user_id) VALUES
('john.doe@example.com', 'Personal', 1),
('jane.smith@example.com', 'Work', 2),
('alex.smith@example.com', 'Personal', 3),
('emily.white@example.com', 'Work', 4),
('eric.johnson@example.com', 'Personal', 5),
('maria.garcia@example.com', 'Work', 6),
('david.brown@example.com', 'Personal', 7),
('lisa.wilson@example.com', 'Work', 8),
('sarah.taylor@example.com', 'Personal', 9),
('chris.lee@example.com', 'Work', 10);

INSERT INTO user_class (user_id, class_id) VALUES
(1, 1),
(2, 2),
(3, 1),
(4, 3),
(1, 4),
(2, 3),
(3, 2),
(4, 4),
(1, 5),
(2, 6);

INSERT INTO user_speciality (user_id, sp_id) VALUES
(1, 1),
(2, 2),
(3, 1),
(4, 3),
(1, 4),
(2, 3),
(3, 2),
(4, 4),
(1, 5),
(2, 6);

INSERT INTO teachers (teacher_user_id) VALUES
(1),
(6),
(8),
(10),
(3),
(7),
(4),
(9),
(5),
(2);

INSERT INTO students (student_user_id) VALUES
(2),
(3),
(4),
(5),
(7),
(8),
(9),
(10),
(1),
(6);

INSERT INTO extra_points_type (ext_type_name, ext_type_value) VALUES
('Llegada Temprana', 5),
('Participación en clase', 10),
('Proyecto Extra', 20),
('Excelente Desempeño', 15),
('Colaboración en Grupo', 8),
('Asistencia Perfecta', 10),
('Mejora Continua', 12),
('Trabajo Dedicado', 15),
('Creatividad Destacada', 18),
('Esmero en Tareas', 10);

INSERT INTO extra_points (ext_teacher_id, ext_student_id, ext_class_id, ext_type_id, ext_comments) VALUES
(1, 2, 1, 1, 'Llegó temprano a clase.'),
(2, 3, 2, 2, 'Participó activamente en la discusión.'),
(3, 1, 1, 3, 'Entregó un proyecto adicional.'),
(4, 4, 3, 4, 'Obtuvo calificaciones sobresalientes en los exámenes.'),
(1, 5, 4, 5, 'Trabajó en equipo y colaboró con sus compañeros.'),
(2, 6, 5, 6, 'Asistió a todas las clases del mes.'),
(3, 7, 6, 7, 'Ha mostrado un progreso significativo en su rendimiento.'),
(4, 8, 7, 8, 'Siempre se muestra dedicado y comprometido con su aprendizaje.'),
(1, 9, 8, 9, 'Demostró creatividad en un proyecto de arte.'),
(2, 10, 9, 10, 'Realizó sus tareas con esmero y dedicación.');

/* --------------------------------------------DATABASE QUERIES-------------------------------------------------- */

/* -----------------Show Each Teacher With Their Students---------- */
SELECT t.teacher_id, t.teacher_user_id, u_teacher.user_name AS teacher_name,
s.student_id, s.student_user_id, u_student.user_name AS student_name
FROM teachers t
LEFT JOIN user_class uc_teacher ON t.teacher_user_id = uc_teacher.user_id
LEFT JOIN user_class uc_student ON uc_teacher.class_id = uc_student.class_id
LEFT JOIN students s ON uc_student.user_id = s.student_user_id
LEFT JOIN users u_teacher ON t.teacher_user_id = u_teacher.user_id
LEFT JOIN users u_student ON s.student_user_id = u_student.user_id;

/* -------------------Show A Teacher's Students------------------------- */
SELECT t.teacher_id, t.teacher_user_id, u_teacher.user_name AS teacher_name,
s.student_id, s.student_user_id, u_student.user_name AS student_name
FROM teachers t
JOIN user_class uc_teacher ON t.teacher_user_id = uc_teacher.user_id
JOIN user_class uc_student ON uc_teacher.class_id = uc_student.class_id
JOIN students s ON uc_student.user_id = s.student_user_id
JOIN users u_teacher ON t.teacher_user_id = u_teacher.user_id
JOIN users u_student ON s.student_user_id = u_student.user_id
WHERE t.teacher_id = 1;

/* ----------------------Show All Students---------------- */
SELECT s.student_id, u.user_name AS student_name
FROM students s
JOIN users u ON s.student_user_id = u.user_id;

/* ----------------------Show All Teachers---------------- */
SELECT t.teacher_id, u.user_name AS teacher_name
FROM teachers t
JOIN users u ON t.teacher_user_id = u.user_id;

/* -----------------Show The Personal Data Of Each Student-------------------- */
SELECT u.user_name, u.user_gender, u.user_age, u.user_address,
c.em_address AS contact_email, p.ph_num AS phone_number
FROM users u
LEFT JOIN contact_email c ON u.user_id = c.em_user_id
LEFT JOIN phone_numbers p ON u.user_id = p.ph_user
WHERE u.user_id IN (SELECT student_user_id FROM students);

/* -----------------Show The Personal Data Of Each Teacher-------------------- */
SELECT u.user_name, u.user_gender, u.user_age, u.user_address,
c.em_address AS contact_email, p.ph_num AS phone_number
FROM users u
LEFT JOIN contact_email c ON u.user_id = c.em_user_id
LEFT JOIN phone_numbers p ON u.user_id = p.ph_user
WHERE u.user_id IN (SELECT teacher_user_id FROM teachers);

/* -----------------------Show Administrators----------------- */
SELECT u.user_name AS administrator_name
FROM users u
JOIN roll r ON u.user_roll_id = r.roll_id
WHERE r.roll_name = 'Administrator';

/* ------------------Show The Accumulated Points Of Each Student----------------------- */
SELECT s.student_id, u.user_name AS student_name, 
SUM(et.ext_type_value) AS total_extra_points, 
GROUP_CONCAT(ep.ext_comments SEPARATOR '; ') AS comments
FROM students s
JOIN users u ON s.student_user_id = u.user_id
LEFT JOIN extra_points ep ON s.student_id = ep.ext_student_id
LEFT JOIN extra_points_type et ON ep.ext_type_id = et.ext_type_id
GROUP BY s.student_id, u.user_name;
