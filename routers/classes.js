import mysql from "mysql2";
import { Router } from "express";
import proxyClasses from "../middleware/proxyClasses.js";

const classesHub = Router();
let connection;

classesHub.use((req, res, next) => {
  const config = JSON.parse(process.env.MY_CONNECT)
  connection = mysql.createPool(config);
  next();
})

classesHub.get("/", (req, res) => {
  connection.query('SELECT * FROM classes', (err, result, fil) => {
    res.end(JSON.stringify(result));
  })
})

classesHub.get("/:id", (req, res) => {
  const classId = req.params.id;

  connection.query(
    "SELECT * FROM classes WHERE class_id = ?",
    [classId],
    (err, result) => {
      if (err) {
        console.error("¡ERROR! Error Getting Class Information", err);
        return res.status(500).json({ mensaje: "¡ERROR! Error Getting Class Information" });
      }

      if (result.length === 0) {
        return res.status(404).json({ mensaje: "¡ERROR! No Class Information Found" });
      }

      const Class = result[0];
      return res.json(Class);
    }
  );
});

classesHub.post("/", proxyClasses, (req, res) => {
  const { id, name, teacher_id } = req.body;

  connection.query(
    'INSERT INTO classes(class_id, class_name, class_teacher_id) VALUES (?,?,?)',
    [ id, name, teacher_id],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
      } else {
        res.end("The Data Was Successfully Inserted Into The DataBase :)");
      }
    });
});

classesHub.put("/:id", proxyClasses, (req, res) => {
  const classId = req.params.id;
  const {name, teacher_id} = req.body;

  connection.query(
    "UPDATE classes SET class_name = ?, class_teacher_id = ? WHERE class_id = ?",
    [ name, teacher_id, classId],
    (err, result) => {
      if (err) {
        console.error("Failed To Update Class's Information", err);
        return res.status(500).json({ mensaje: "Failed To Update Class's Information" });
      }

      return res.json({ mensaje: "Class Information Successfully Updated :)" });
    }
  );
});

classesHub.delete("/:id", (req, res) => {
  const classId = req.params.id;

  connection.query(
    "DELETE FROM classes WHERE class_id = ?",
    [classId],
    (err, result) => {
      if (err) {
        console.error("Error Deleting Class's Information: ", err);
        return res.status(500).json({ mensaje: "Error Deleting Class's Information" });
      }

      return res.json({ mensaje: "Class's Information Successfully deleted" });
    }
  );
});

export default classesHub;
