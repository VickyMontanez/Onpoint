import mysql from "mysql2";
import { Router } from "express";

const studentsHub = Router();
let connection;

studentsHub.use((req, res, next) => {
  const config = JSON.parse(process.env.MY_CONNECT)
  connection = mysql.createPool(config);
  next();
})

studentsHub.get("/", (req, res) => {
  connection.query('SELECT * FROM students', (err, result, fil) => {
    res.end(JSON.stringify(result));
  })
})

studentsHub.get("/:id", (req, res) => {
  const studentId = req.params.id;

  connection.query(
    "SELECT * FROM students WHERE student_id = ?",
    [studentId],
    (err, result) => {
      if (err) {
        console.error("¡ERROR! Error Getting Student Information", err);
        return res.status(500).json({ mensaje: "¡ERROR! Error Getting Student Information" });
      }

      if (result.length === 0) {
        return res.status(404).json({ mensaje: "¡ERROR! No Student Information Found" });
      }

      const student = result[0];
      return res.json(student);
    }
  );
});

studentsHub.post("/", (req, res) => {
  const { id, name, class_id, age, gender, phone, email, address } = req.body;

  connection.query(
    'INSERT INTO students(student_id,student_name, student_class_id, student_age, student_gender, student_phone, student_email,student_address) VALUES (?,?,?,?,?,?,?,?)',
    [id, name, class_id, age, gender, phone, email, address],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
      } else {
        res.end("The Data Was Successfully Inserted Into The DataBase :)");
      }
    });
});

studentsHub.put("/:id", (req, res) => {
  const studentId = req.params.id;
  const { name, class_id, age, gender, phone, email, address} = req.body;

  connection.query(
    "UPDATE students SET student_name = ?, student_class_id = ?, student_age = ?, student_gender = ?, student_phone = ?, student_email = ?, student_address = ? WHERE student_id = ?",
    [ name, class_id, age, gender, phone, email, address, studentId],
    (err, result) => {
      if (err) {
        console.error("Failed To Update Student's Information", err);
        return res.status(500).json({ mensaje: "Failed To Update student's Information" });
      }

      return res.json({ mensaje: "Student Information Successfully Updated :)" });
    }
  );
});

studentsHub.delete("/:id", (req, res) => {
  const studentId = req.params.id;

  connection.query(
    "DELETE FROM students WHERE student_id = ?",
    [studentId],
    (err, result) => {
      if (err) {
        console.error("Error Deleting Student's Information: ", err);
        return res.status(500).json({ mensaje: "Error Deleting Student's Information" });
      }

      return res.json({ mensaje: "Student's Information Successfully deleted" });
    }
  );
});

export default studentsHub;
