
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/create', (req, res) => {
  const { user_id, driver_id, pickup, drop_loc, date } = req.body;
  const sql = "INSERT INTO bookings (user_id, driver_id, pickup, drop_loc, date) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [user_id, driver_id, pickup, drop_loc, date], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Booking created" });
  });
});

router.get('/', (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

module.exports = router;
