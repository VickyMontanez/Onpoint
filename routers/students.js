import mysql from "mysql2";
import { Router } from "express";
import proxyStudents from "../middleware/proxyStudents.js";

const studentsHub = Router();
let connection;

/* Connection to the database */
studentsHub.use((req, res, next) => {
  const config = JSON.parse(process.env.MY_CONNECT);
  connection = mysql.createPool(config);
  next();
});

/* GET all students with their IDs and names */
studentsHub.get("/", (req, res) => {
  connection.query('SELECT s.student_id, u.user_name AS student_name FROM students s JOIN users u ON s.student_user_id = u.user_id ORDER BY s.student_id ASC', (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
    }
    res.json(result);
  });
});

/* GET student's personal information by ID */
studentsHub.get("/:id", (req, res) => {
  const studentId = req.params.id;
  connection.query(
    `SELECT s.student_id, u.user_name AS student_name, u.user_gender, u.user_age, u.user_address, 
    p.ph_num AS student_phone, c.em_address AS student_email, r.roll_name AS roll, cl.class_name AS class_name
    FROM students s
    JOIN users u ON s.student_user_id = u.user_id
    LEFT JOIN phone_numbers p ON u.user_id = p.ph_user
    LEFT JOIN contact_email c ON u.user_id = c.em_user_id
    LEFT JOIN roll r ON u.user_roll_id = r.roll_id
    LEFT JOIN user_class uc ON s.student_user_id = uc.user_id
    LEFT JOIN classes cl ON uc.class_id = cl.class_id
    WHERE s.student_id = ?`,
    [studentId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Getting Student Information");
      }
      if (result.length === 0) {
        return res.status(404).json({ mensaje: "¡ERROR! No Student Information Found" });
      }
      const student = result[0];
      return res.json(student);
    }
  );
});

/* POST student's information to the database */
studentsHub.post("/", proxyStudents, (req, res) => {
  const { id, name, gender, age, address, phone, phone_type, email, email_type, class_id, roll_id } = req.body;

  // First, insert the student's personal information into the "users" table
  connection.query(
    'INSERT INTO users (user_id, user_name, user_gender, user_age, user_address, user_roll_id) VALUES (?, ?, ?, ?, ?, ?)',
    [id, name, gender, age, address, roll_id],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
      } else {

        // The student's phone number is inserted in the "phone_numbers" table
        connection.query(
          'INSERT INTO phone_numbers (ph_num, ph_type, ph_user) VALUES (?, ?, ?)',
          [phone, phone_type, id],
          (err, result, fields) => {
            if (err) {
              console.error(err);
              return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
            } else {

              // Insert the student's email in the "contact_email" table
              connection.query(
                'INSERT INTO contact_email (em_address, em_type, em_user_id) VALUES (?, ?, ?)',
                [email, email_type, id],
                (err, result, fields) => {
                  if (err) {
                    console.error(err);
                    return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
                  } else {

                    // The post id is inserted as the global user of the student in the "students" table
                    connection.query(
                      'INSERT INTO students (student_user_id) VALUES (?)',
                      [id],
                      (err, result, fields) => {
                        if (err) {
                          console.error(err);
                          return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
                        } else {
                          // Insert the student in the corresponding class in the table "user_class"
                          connection.query(
                            'INSERT INTO user_class (user_id, class_id) VALUES (?, ?)',
                            [id, class_id],
                            (err, result, fields) => {
                              if (err) {
                                console.error(err);
                                return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
                              } else {
                                res.end("The Data Was Successfully Inserted Into The DataBase :) (students)");
                              }
                            }
                          );
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

/* UPDATE student's information */
studentsHub.put("/:id", proxyStudents, (req, res) => {
  const studentId = req.params.id;
  const { name, gender, age, address, phone, phone_type, email, email_type, roll_id, class_id } = req.body;

  // First, we get the user_id associated with the student_id in the "students" table
  connection.query(
    'SELECT student_user_id FROM students WHERE student_id = ?',
    [studentId],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
      } else if (result.length === 0) {
        return res.status(404).send("Student not found");
      } else {
        const userId = result[0].student_user_id;

        // Update the student's personal information in the "users" table
        connection.query(
          'UPDATE users SET user_name = ?, user_gender = ?, user_age = ?, user_address = ?, user_roll_id = ? WHERE user_id = ?',
          [name, gender, age, address, roll_id, userId],
          (err, result, fields) => {
            if (err) {
              console.error(err);
              return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
            } else {

              // Update the student's phone number in the "phone_numbers" table
              connection.query(
                'UPDATE phone_numbers SET ph_num = ?, ph_type = ? WHERE ph_user = ?',
                [phone, phone_type, userId],
                (err, result, fields) => {
                  if (err) {
                    console.error(err);
                    return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
                  } else {

                    // Update the student's email in the "contact_email" table
                    connection.query(
                      'UPDATE contact_email SET em_address = ?, em_type = ? WHERE em_user_id = ?',
                      [email, email_type, userId],
                      (err, result, fields) => {
                        if (err) {
                          console.error(err);
                          return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
                        } else {

                          // Update the student's class in the "user_class" table
                          connection.query(
                            'UPDATE user_class SET class_id = ? WHERE user_id = ?',
                            [class_id, userId],
                            (err, result, fields) => {
                              if (err) {
                                console.error(err);
                                return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
                              } else {
                                res.send("The data was successfully updated in the database :) (students)");
                              }
                            }
                          );
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

/* DELETE student's information */
studentsHub.delete("/:id", (req, res) => {
  const studentId = req.params.id;

  // Check if the student exists in the "students" table
  connection.query(
    'SELECT * FROM students WHERE student_id = ?',
    [studentId],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
      } else if (result.length === 0) {
        return res.status(404).send("Student not Found");
      } else {
        // Saves the user_id of the user associated with the student
        const userId = result[0].student_user_id;

        // Remove the student information from the "students" table
        connection.query(
          'DELETE FROM students WHERE student_id = ?',
          [studentId],
          (err, result, fields) => {
            if (err) {
              console.error(err);
              return res.status(500).send("¡ERROR! Error Deleting Data from the DataBase");
            } else {

              // Updates the user's role to PENDING in the "users" table
              connection.query(
                'UPDATE users SET user_roll_id = 4 WHERE user_id = ?',
                [userId],
                (err, result, fields) => {
                  if (err) {
                    console.error(err);
                    return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
                  } else {
                    res.send("The data was successfully deleted in the database :) (students)");
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

export default studentsHub;