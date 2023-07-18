import mysql from "mysql2";
import { Router } from "express";
import proxyBonusPoints from "../middleware/proxyBonusPoints.js";

const bonuspointsHub = Router();
let connection;

bonuspointsHub.use((req, res, next) => {
  const config = JSON.parse(process.env.MY_CONNECT)
  connection = mysql.createPool(config);
  next();
})

bonuspointsHub.get("/", (req, res) => {
  connection.query('SELECT * FROM bonus_points', (err, result, fil) => {
    res.end(JSON.stringify(result));
  })
})

bonuspointsHub.get("/:id", (req, res) => {
  const bpId = req.params.id;

  connection.query(
    "SELECT * FROM bonus_points WHERE bp_id = ?",
    [bpId],
    (err, result) => {
      if (err) {
        console.error("¡ERROR! Error Getting Bonus Points Information", err);
        return res.status(500).json({ mensaje: "¡ERROR! Error Getting Bonus Points Information" });
      }

      if (result.length === 0) {
        return res.status(404).json({ mensaje: "¡ERROR! No Bonus Points Information Found" });
      }

      const bp = result[0];
      return res.json(bp);
    }
  );
});

bonuspointsHub.post("/", proxyBonusPoints, (req, res) => {
  const { id, amount, comments, student_id, created_by, updated_by } = req.body;

  connection.query(
    'INSERT INTO bonus_points (bp_id, bp_amount, bp_comments, bp_student_id, bp_created_by, bp_created_at, bp_updated_by, bp_updated_at) VALUES (?,?,?,?,?,NOW(),?,NOW())',
    [ id, amount, comments, student_id, created_by, updated_by ],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("¡ERROR! Error Inserting Data Into the DataBase");
      } else {
        res.end("The Data Was Successfully Inserted Into The DataBase :)");
      }
    });
});

bonuspointsHub.put("/:id", proxyBonusPoints, (req, res) => {
  const bpId = req.params.id;
  const {amount, comments, student_id, created_by, updated_by } = req.body;

  connection.query(
    "UPDATE bonus_points SET bp_amount = ?, bp_comments = ?, bp_student_id = ?, bp_created_by = ?, bp_created_at = NOW(), bp_updated_by = ?, bp_updated_at = NOW() WHERE bp_id = ?",
    [ amount, comments, student_id, created_by, updated_by,  bpId],
    (err, result) => {
      if (err) {
        console.error("Failed To Update Bonus Points's Information", err);
        return res.status(500).json({ mensaje: "Failed To Update Bonus Points's Information" });
      }

      return res.json({ mensaje: "Bonus Points Information Successfully Updated :)" });
    }
  );
});

bonuspointsHub.delete("/:id", (req, res) => {
  const bpId = req.params.id;

  connection.query(
    "DELETE FROM bonus_points WHERE bp_id = ?",
    [bpId],
    (err, result) => {
      if (err) {
        console.error("Error Deleting Bonus Points's Information: ", err);
        return res.status(500).json({ mensaje: "Error Deleting Bonus Points's Information" });
      }

      return res.json({ mensaje: "Bonus Points's Information Successfully deleted" });
    }
  );
});

export default bonuspointsHub;
