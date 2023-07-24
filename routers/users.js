import mysql from "mysql2";
import { Router } from "express";
import proxyUsers from "../middleware/proxyUsers.js";

const usersHub = Router();
let connection;

/* Connection to the database */
usersHub.use((req, res, next) => {
  const config = JSON.parse(process.env.MY_CONNECT)
  connection = mysql.createPool(config);
  next();
})

/* ALL the Users are GET by id and name */
usersHub.get("/", (req, res) => {
  connection.query('SELECT user_id, user_name FROM users;', (err, result, fil) => {
    res.end(JSON.stringify(result));
  })
})

/* All the User's Personal Information is GET by id */
usersHub.get("/:id", (req, res) => {
  const userId = req.params.id;

  connection.query(
    `SELECT u.user_id, u.user_name, g.gen_name AS gender, u.user_age, u.user_address, r.roll_name AS user_role, e.em_address AS email, p.ph_num AS phone_number
    FROM users u
    LEFT JOIN gender g ON u.user_gender = g.gen_id
    LEFT JOIN roll r ON u.user_roll_id = r.roll_id
    LEFT JOIN contact_email e ON u.user_id = e.em_user_id
    LEFT JOIN phone_numbers p ON u.user_id = p.ph_user
    WHERE u.user_id = ?`,
    [userId],
    (err, result) => {
      if (err) {
        console.error("¡ERROR! Error Getting User Information", err);
        return res.status(500).json({ mensaje: "¡ERROR! Error Getting User Information" });
      }
      if (result.length === 0) {
        return res.status(404).json({ mensaje: "¡ERROR! No User Information Found" });
      }
      const User = result[0];
      return res.json(User);
    }
  );
});

/* User Information is POST to the DataBase */
usersHub.post("/", proxyUsers, (req, res) => {

  const { id, name, gender, age, address, phone, phone_type, email, email_type, roll_id } = req.body;

  // First, insert the user's personal information into the "users" table
  connection.query(
    "INSERT INTO users (user_id, user_name, user_gender, user_age, user_address, user_roll_id) VALUES (?, ?, ?, ?, ?, ?)",
    [id, name, gender, age, address, roll_id],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        connection.rollback(() => {
          return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
        });
      }

      // Insert the user's phone number into the 'phone_numbers' table
      connection.query(
        "INSERT INTO phone_numbers (ph_num, ph_type, ph_user) VALUES (?, ?, ?)",
        [phone, phone_type, id],
        (err, result, fields) => {
          if (err) {
            console.error(err);
            connection.rollback(() => {
              return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
            });
          }

          // Insert the teacher's email in the 'contact_email' table
          connection.query(
            "INSERT INTO contact_email (em_address, em_type, em_user_id) VALUES (?, ?, ?)",
            [email, email_type, id],
            (err, result, fields) => {
              if (err) {
                console.error(err);
                return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
              } else {
                res.end("The Data Was Successfully Inserted Into The DataBase :) (teachers)");
              }
            });
        });
    });
});

/* UPDATE the information of the users */
usersHub.put("/:id", proxyUsers, (req, res) => {
  const userId = req.params.userId;
  const { name, gender, age, address, phone, phone_type, email, email_type, roll_id } = req.body;

  // Update the user's personal information in the "users" table
  connection.query(
    "UPDATE users SET user_name = ?, user_gender = ?, user_age = ?, user_address = ?, user_roll_id = ? WHERE user_id = ?",
    [name, gender, age, address, roll_id, userId],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
      }

      // Update the user's phone number in the "phone_numbers" table
      connection.query(
        "UPDATE phone_numbers SET ph_num = ?, ph_type = ? WHERE ph_user = ?",
        [phone, phone_type, userId],
        (err, result, fields) => {
          if (err) {
            console.error(err);
            return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
          }

          // Update the user's email in the "contact_email" table
          connection.query(
            "UPDATE contact_email SET em_address = ?, em_type = ? WHERE em_user_id = ?",
            [email, email_type, userId],
            (err, result, fields) => {
              if (err) {
                console.error(err);
                return res.status(500).send("¡ERROR! Error Updating Data in the DataBase");
              }

              res.send("User information updated successfully");
            }
          );
        }
      );
    }
  );
});

/* DELETE all the information of the user */
usersHub.delete("/:id", (req, res) => {
  const userId = req.params.id;

  // Remove the user from the "user_class" table
  connection.query(
    "DELETE FROM user_class WHERE user_id = ?",
    [userId],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        connection.rollback(() => {
          return res.status(500).send("¡ERROR! Error Deleting Data from the DataBase");
        });
      }

      // Remove the user information from the "user_speciality" table
      connection.query(
        "DELETE FROM user_speciality WHERE user_id = ?",
        [userId],
        (err, result, fields) => {
          if (err) {
            console.error(err);
            connection.rollback(() => {
              return res.status(500).send("¡ERROR! Error Deleting Data from the DataBase");
            });
          }

          // Remove the user information from the "teachers" table
          connection.query(
            "DELETE FROM teachers WHERE teacher_user_id = ?",
            [userId],
            (err, result, fields) => {
              if (err) {
                console.error(err);
                connection.rollback(() => {
                  return res.status(500).send("¡ERROR! Error Deleting Data from the DataBase");
                });
              }

              // Remove the user information from the "students" table
              connection.query(
                "DELETE FROM students WHERE student_user_id = ?",
                [userId],
                (err, result, fields) => {
                  if (err) {
                    console.error(err);
                    connection.rollback(() => {
                      return res.status(500).send("¡¡ERROR! Error Deleting Data from the DataBase");
                    });
                  }

                  // ERemove the user information from the"contact_email" table
                  connection.query(
                    "DELETE FROM contact_email WHERE em_user_id = ?",
                    [userId],
                    (err, result, fields) => {
                      if (err) {
                        console.error(err);
                        connection.rollback(() => {
                          return res.status(500).send("¡ERROR! Error Deleting Data from the DataBase");
                        });
                      }

                      // Remove the user information from the "phone_numbers" table
                      connection.query(
                        "DELETE FROM phone_numbers WHERE ph_user = ?",
                        [userId],
                        (err, result, fields) => {
                          if (err) {
                            console.error(err);
                            connection.rollback(() => {
                              return res.status(500).send("¡ERROR! Error Deleting Data from the DataBase");
                            });
                          }

                          // Remove the user information from the "users" table
                          connection.query(
                            "DELETE FROM users WHERE user_id = ?",
                            [userId],
                            (err, result, fields) => {
                              if (err) {
                                console.error(err);
                                return res.status(500).send("¡ERROR! Error Deleting Data from the DataBase");
                              } else {
                                res.send("The data was successfully deleted in the database :) (users)");
                              }
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});

export default usersHub;