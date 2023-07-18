import mysql from "mysql2";
import { Router } from "express";
import proxyTeachers from "../middleware/proxyTeachers.js";

const teachersHub = Router();
let connection;

teachersHub.use((req, res, next) => {
  const config = JSON.parse(process.env.MY_CONNECT)
  connection = mysql.createPool(config);
  next();
})

teachersHub.get("/", (req, res) => {
  connection.query('SELECT * FROM teachers', (err, result, fil) => {
    res.end(JSON.stringify(result));
  })
})

teachersHub.get("/:id", (req, res) => {
  const teacherId = req.params.id;

  connection.query(
    "SELECT * FROM teachers WHERE teacher_id = ?",
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

teachersHub.post("/", proxyTeachers, (req, res) => {
  const { id, name, specialty, phone, age, gender, email, address } = req.body;

  connection.query(
    'INSERT INTO teachers(teacher_id,teacher_name,teacher_specialty,teacher_phone,teacher_age,teacher_gender,teacher_email,teacher_address) VALUES (?,?,?,?,?,?,?,?)',
    [id, name, specialty, phone, age, gender, email, address],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
      } else {
        res.end("The Data Was Successfully Inserted Into The DataBase :)");
      }
    });
});

/* { "id": , "name": , "specialty": , "phone": , "age": , "gender": , "email": , "address":  } */
teachersHub.put("/:id", (req, res) => {
  const teacherId = req.params.id;
  const { name, specialty, phone, age, gender, email, address} = req.body;

  connection.query(
    "UPDATE teachers SET teacher_name = ?, teacher_specialty = ?, teacher_phone = ?,teacher_age = ?, teacher_gender = ?, teacher_email = ?, teacher_address = ? WHERE teacher_id = ?",
    [name, specialty, phone, age, gender, email, address, teacherId],
    (err, result) => {
      if (err) {
        console.error("Failed To Update Teacher's Information", err);
        return res.status(500).json({ mensaje: "Failed To Update Teacher's Information" });
      }

      return res.json({ mensaje: "Teacher Information Successfully Updated :)" });
    }
  );
});

teachersHub.delete("/:id", (req, res) => {
  const teacherId = req.params.id;

  connection.query(
    "DELETE FROM teachers WHERE teacher_id = ?",
    [teacherId],
    (err, result) => {
      if (err) {
        console.error("Error Deleting Teacher's Information: ", err);
        return res.status(500).json({ mensaje: "Error Deleting Teacher's Information" });
      }

      return res.json({ mensaje: "Teacher's Information Successfully deleted" });
    }
  );
});

export default teachersHub;
