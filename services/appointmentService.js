const Appointment = require('../models/Appointment');

const createAppointment = async (appointmentData, userId) => {
    const appointment = await Appointment.create({
        ...appointmentData,
        user: userId
    });

    return appointment;
};

const getAppointments = async (userId) => {
    const appointments = await Appointment.find({ user: userId })
        .sort({ date: 1, time: 1 });
    return appointments;
};

const cancelAppointment = async (appointmentId, userId) => {
    const appointment = await Appointment.findOne({
        _id: appointmentId,
        user: userId
    });

    if (!appointment) {
        throw new Error('Appointment not found');
    }

    if (appointment.status === 'cancelled') {
        throw new Error('Appointment is already cancelled');
    }

    appointment.status = 'cancelled';
    await appointment.save();

    return appointment;
};

module.exports = {
    createAppointment,
    getAppointments,
    cancelAppointment
}; 