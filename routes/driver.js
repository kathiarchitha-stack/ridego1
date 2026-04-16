
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query("SELECT * FROM drivers", (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

router.post('/add', (req, res) => {
  const { name, phone, vehicle } = req.body;
  const sql = "INSERT INTO drivers (name, phone, vehicle) VALUES (?, ?, ?)";
  db.query(sql, [name, phone, vehicle], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Driver added" });
  });
});

module.exports = router;
