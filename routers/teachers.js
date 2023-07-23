import mysql from "mysql2";
import { Router } from "express";
import proxyTeachers from "../middleware/proxyTeachers.js";

const teachersHub = Router();
let connection;

/* Connection to the database */
teachersHub.use((req, res, next) => {
  const config = JSON.parse(process.env.MY_CONNECT)
  connection = mysql.createPool(config);
  next();
})

/* ALL the Teachers are GET by id and name */
teachersHub.get("/", (req, res) => {

  // Teacher ID's are GET along with their usernames.
  connection.query('SELECT t.teacher_id, u.user_name AS teacher_name FROM teachers t JOIN users u ON t.teacher_user_id = u.user_id', (err, result, fil) => {
    res.end(JSON.stringify(result));
  })
})

/* All the Teacher's Personal Information is GET by id */
teachersHub.get("/:id", (req, res) => {
  const teacherId = req.params.id;

  // Personal information is GET from a specific teacher, including name, gender, age, address, phone, email...
  connection.query(
    `SELECT t.teacher_id, u.user_name AS teacher_name, u.user_gender, u.user_age, u.user_address, p.ph_num AS teacher_phone, c.em_address AS teacher_email, s.sp_name AS specialty, cl.class_name AS class_name, r.roll_name AS roll
    FROM teachers t
    JOIN users u ON t.teacher_user_id = u.user_id
    LEFT JOIN phone_numbers p ON u.user_id = p.ph_user
    LEFT JOIN contact_email c ON u.user_id = c.em_user_id
    LEFT JOIN user_speciality us ON u.user_id = us.user_id
    LEFT JOIN speciality s ON us.sp_id = s.sp_id
    LEFT JOIN user_class uc ON u.user_id = uc.user_id
    LEFT JOIN classes cl ON uc.class_id = cl.class_id
    LEFT JOIN roll r ON u.user_roll_id = r.roll_id
    WHERE t.teacher_id = ?`,
    [teacherId],
    (err, result) => {
      if (err) {
        console.error("¡ERROR! Error Getting Teacher Information", err);
        return res.status(500).json({ mensaje: "¡ERROR! Error Getting Teacher Information" });
      }
      if (result.length === 0) {
        return res.status(404).json({ mensaje: "¡ERROR! No Teacher Information Found" });
      }
      const teacher = result[0];
      return res.json(teacher);
    }
  );
});

/* Teacher Information is POST to the DataBase */
teachersHub.post("/", (req, res) => {

  const { id, name, gender, age, address, phone, phone_type, email, email_type, specialty_id, class_id, roll_id } = req.body;

  // First, insert the teacher's personal information into the "users" table
  connection.query(
    'INSERT INTO users (user_id, user_name, user_gender, user_age, user_address, user_roll_id) VALUES (?, ?, ?, ?, ?, ?)',
    [id, name, gender, age, address, roll_id],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
      } else {

        // The teacher's phone number is inserted in the "phone_numbers" table
        connection.query(
          'INSERT INTO phone_numbers (ph_num, ph_type, ph_user) VALUES (?, ?, ?)',
          [phone, phone_type, id],
          (err, result, fields) => {
            if (err) {
              console.error(err);
              return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
            } else {

              // Insert the teacher's email in the "contact_email" table
              connection.query(
                'INSERT INTO contact_email (em_address, em_type, em_user_id) VALUES (?, ?, ?)',
                [email, email_type, id],
                (err, result, fields) => {
                  if (err) {
                    console.error(err);
                    return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
                  } else {

                    // The post id is inserted as the global user of the teacher in the "teachers" table
                    connection.query(
                      'INSERT INTO teachers (teacher_user_id) VALUES (?)',
                      [id],
                      (err, result, fields) => {
                        if (err) {
                          console.error(err);
                          return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
                        } else {

                          // Inserts the teacher's specialties in the "user_specialty" table
                          connection.query(
                            'INSERT INTO user_speciality (user_id, sp_id) VALUES (?, ?)',
                            [id, specialty_id],
                            (err, result, fields) => {
                              if (err) {
                                console.error(err);
                                return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
                              }
                            }
                          );

                          //Insert the teacher in the corresponding class in the table "user_class"
                          connection.query(
                            'INSERT INTO user_class (user_id, class_id) VALUES (?, ?)',
                            [id, class_id],
                            (err, result, fields) => {
                              if (err) {
                                console.error(err);
                                return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
                              } else {
                                res.end("The Data Was Successfully Inserted Into The DataBase :) (teachers)");
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

/* UPDATE the information of the teachers */
teachersHub.put("/:id", (req, res) => {
  const teacherId = req.params.id;
  const { name, gender, age, address, phone, phone_type, email, email_type, specialty_id, class_id, roll_id } = req.body;

  // First, we get the user_id associated with the teacher_id in the "teachers" table
  connection.query(
    'SELECT teacher_user_id FROM teachers WHERE teacher_id = ?',
    [teacherId],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
      } else if (result.length === 0) {
        return res.status(404).send("Profesor no encontrado");
      } else {
        const userId = result[0].teacher_user_id;

        // Update the teacher's personal information in the "users" table
        connection.query(
          'UPDATE users SET user_name = ?, user_gender = ?, user_age = ?, user_address = ?, user_roll_id = ? WHERE user_id = ?',
          [name, gender, age, address, roll_id, userId],
          (err, result, fields) => {
            if (err) {
              console.error(err);
              return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
            } else {

              // Update the teacher's phone number in the "phone_numbers" table
              connection.query(
                'UPDATE phone_numbers SET ph_num = ?, ph_type = ? WHERE ph_user = ?',
                [phone, phone_type, userId],
                (err, result, fields) => {
                  if (err) {
                    console.error(err);
                    return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
                  } else {

                    // Update the teacher's email in the "contact_email" table
                    connection.query(
                      'UPDATE contact_email SET em_address = ?, em_type = ? WHERE em_user_id = ?',
                      [email, email_type, userId],
                      (err, result, fields) => {
                        if (err) {
                          console.error(err);
                          return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
                        } else {

                          // User id and Teacher id are updated in the "teachers" table
                          connection.query(
                            'UPDATE teachers SET teacher_user_id = ? WHERE teacher_id = ?',
                            [userId, teacherId],
                            (err, result, fields) => {
                              if (err) {
                                console.error(err);
                                return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
                              } else {

                               // Update the teacher's specialties in the "user_specialty" table
                                connection.query(
                                  'UPDATE user_speciality SET sp_id = ? WHERE user_id = ?',
                                  [specialty_id, userId],
                                  (err, result, fields) => {
                                    if (err) {
                                      console.error(err);
                                      return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
                                    }
                                  }
                                );

                                // Update the class of the teacher in the "user_class" table
                                connection.query(
                                  'UPDATE user_class SET class_id = ? WHERE user_id = ?',
                                  [class_id, userId],
                                  (err, result, fields) => {
                                    if (err) {
                                      console.error(err);
                                      return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
                                    } else {
                                      res.send("The data was successfully updated in the database :) (teachers)");
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
      }
    }
  );
});

/* DELETE the information of the teachers */
teachersHub.delete("/:id", (req, res) => {
  const teacherId = req.params.id;

  // Check if the teacher exists in the "teachers" table
  connection.query(
    'SELECT * FROM teachers WHERE teacher_id = ?',
    [teacherId],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
      } else if (result.length === 0) {
        return res.status(404).send("Teacher no Found");
      } else {
        // Saves the user_id of the user associated with the teacher
        const userId = result[0].teacher_user_id;

        // Remove the teacher information from the "teachers" table
        connection.query(
          'DELETE FROM teachers WHERE teacher_id = ?',
          [teacherId],
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
                    res.send("The data was successfully deleted in the database :) (teachers)");
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

export default teachersHub;
