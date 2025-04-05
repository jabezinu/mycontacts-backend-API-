const express = require('express');
const router = express.Router();
const {
    createAppointment,
    getAppointments,
    cancelAppointment
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

// Protected routes
router.use(protect);

router.route('/')
    .post(createAppointment)
    .get(getAppointments);

router.patch('/:id/cancel', cancelAppointment);

module.exports = router; 