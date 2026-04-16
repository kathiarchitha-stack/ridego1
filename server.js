const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
const driverRoutes = require('./routes/driver');
const paymentRoutes = require('./routes/payment');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/payment', paymentRoutes);

// test route
app.get('/', (req, res) => {
  res.send("Drivers Connect Backend Running 🚀");
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});