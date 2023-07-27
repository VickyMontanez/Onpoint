import mysql from "mysql2";
import { Router } from "express";
import proxyExtraPoints from "../middleware/proxyExtraPoints.js";

const extrapointsHub = Router();
let connection;

/* Connection to the database */
extrapointsHub.use((req, res, next) => {
  const config = JSON.parse(process.env.MY_CONNECT)
  connection = mysql.createPool(config);
  next();
})

/* GET students' information with total extra points, ordered by student_id */
extrapointsHub.get("/", (req, res) => {
  connection.query(
    `SELECT s.student_id AS Id, u.user_name AS Student, e.ext_total AS Total_ExtPoints
    FROM students s
    INNER JOIN extra_points e ON s.student_id = e.ext_student_id
    INNER JOIN users u ON u.user_id = s.student_user_id
    ORDER BY s.student_id ASC`,
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
      } else {
        res.json(result);
      }
    }
  );
});

/* GET student's information with total extra points and last comment */
extrapointsHub.get("/:studentId", (req, res) => {
  const studentId = req.params.studentId;

  connection.query(
    `SELECT s.student_id AS Id, u.user_name AS Student,
    t.teacher_id AS TeacherId, ut.user_name AS Teacher, e.ext_total AS Total_ExtPoints
    FROM students s
    INNER JOIN users u ON s.student_user_id = u.user_id
    INNER JOIN extra_points e ON s.student_id = e.ext_student_id
    INNER JOIN teachers t ON e.ext_teacher_id = t.teacher_id
    INNER JOIN users ut ON t.teacher_user_id = ut.user_id
    WHERE s.student_id = ?`,
    [studentId],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
      } else if (result.length === 0) {
        return res.status(404).send("Student not found");
      } else {
        const studentInfo = result[0];
        res.json(studentInfo);
      }
    }
  );
});

/* POST AND PUT student's extra points to the database */
extrapointsHub.post("/more", proxyExtraPoints, (req, res) => {
  const { studentId, teacherId, typeId, comments } = req.body;

  // First, check if the student exists in the database
  connection.query(
    'SELECT * FROM students WHERE student_id = ?',
    [studentId],
    (err, studentResult, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
      }
      if (studentResult.length === 0) {
        return res.status(404).send("Student not found");
      }

      // Student exists, now get the user_id and class_id of the student
      const userId = studentResult[0].student_user_id;

      // Get the class_id of the student
      connection.query(
        'SELECT class_id FROM user_class WHERE user_id = ?',
        [userId],
        (err, classResult, fields) => {
          if (err) {
            console.error(err);
            return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
          }

          if (classResult.length === 0) {
            return res.status(404).send("Student's class not found");
          }

          const classId = classResult[0].class_id;

          // Check if the teacher exists in the database
          connection.query(
            'SELECT * FROM teachers WHERE teacher_id = ?',
            [teacherId],
            (err, teacherResult, fields) => {
              if (err) {
                console.error(err);
                return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
              }

              if (teacherResult.length === 0) {
                return res.status(404).send("Teacher not found");
              }

              // Teacher exists, now Check if the student had already been assigned extra points
              connection.query(`
                  SELECT *
                  FROM extra_points as ex
                  WHERE ex.ext_student_id = ?`,
                [studentId], (err, indexs) => {

                  //If no points have been credited to you, create a new record
                  if (indexs.length < 1) {
                    connection.query(
                      'INSERT INTO extra_points (ext_teacher_id, ext_student_id, ext_class_id, ext_type_id, ext_comments, total_extra) VALUES (?, ?, ?, ?, ?, ?)',
                      [teacherId, userId, classId, typeId, comments, 0],
                      (err, result, fields) => {
                        if (err) {
                          console.error(err);
                          return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
                        } else {
                          res.send({ message: "Extra points inserted successfully :)" })
                        }
                      }
                    );
                    //Otherwise add and update the total extra points
                  } else {
                    connection.query(`
                          SELECT type.ext_type_value as i
                          FROM extra_points_type as type
                          LEFT JOIN extra_points as ext ON ext.ext_type_id = type.ext_type_id
                          WHERE type.ext_type_id = ?;
                          `, typeId, (err, total) => {
                      if (err) res.send(err)
                      else {
                        connection.query(
                          `UPDATE extra_points SET ext_total = ext_total + ? WHERE ext_id = ?`,
                          [total[0].i, studentId],
                          (err, fields) => {
                            if (err) {
                              console.error(err);
                              return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
                            } else {
                              res.json({ message: "Extra points updated successfully :)" });
                            }
                          }
                        );
                      }
                    })
                  }
                })
            }
          );
        }
      );
    }
  );
});

/* DELETE the information of the extrapoints in the database */
extrapointsHub.delete("/:ext_Id", (req, res) => {
  const extraPointsId = req.params.ext_Id;
  // Check if the extra points exist in the database
  connection.query(
    'DELETE FROM extra_points WHERE ext_id = ?',
    [extraPointsId],
    (err, extraPointsResult, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Fetching Data from the DataBase");
      } else {
        res.send("Extra points deleted successfully :) (ExtraPoints)" );
      }
    });
});


export default extrapointsHub;
