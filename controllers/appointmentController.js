const appointmentService = require('../services/appointmentService');

const createAppointment = async (req, res, next) => {
    try {
        const appointment = await appointmentService.createAppointment(req.body, req.user.id);
        res.status(201).json(appointment);
    } catch (error) {
        next(error);
    }
};

const getAppointments = async (req, res, next) => {
    try {
        const appointments = await appointmentService.getAppointments(req.user.id);
        res.status(200).json(appointments);
    } catch (error) {
        next(error);
    }
};

const cancelAppointment = async (req, res, next) => {
    try {
        await appointmentService.cancelAppointment(req.params.id, req.user.id);
        res.status(200).json({ message: 'Appointment cancelled successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createAppointment,
    getAppointments,
    cancelAppointment
}; 