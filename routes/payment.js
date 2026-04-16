
const express = require('express');
const router = express.Router();

router.post('/pay', (req, res) => {
  // Demo payment simulation
  res.send({ status: "success", message: "Payment successful (demo)" });
});

module.exports = router;
