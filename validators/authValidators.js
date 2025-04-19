const { validateEmail, validatePassword } = require('../utils/validationUtils');

const validateRegisterData = (data) => {
    const errors = [];

    if (!data.name) {
        errors.push('Name is required');
    }

    if (!data.email) {
        errors.push('Email is required');
    } else if (!validateEmail(data.email)) {
        errors.push('Please provide a valid email');
    }

    if (!data.password) {
        errors.push('Password is required');
    } else if (!validatePassword(data.password)) {
        errors.push('Password must be at least 6 characters');
    }

    return {
        error: errors.length > 0 ? { details: [{ message: errors[0] }] } : null
    };
};

const validateLoginData = (data) => {
    const errors = [];

    if (!data.email) {
        errors.push('Email is required');
    } else if (!validateEmail(data.email)) {
        errors.push('Please provide a valid email');
    }

    if (!data.password) {
        errors.push('Password is required');
    }

    return {
        error: errors.length > 0 ? { details: [{ message: errors[0] }] } : null
    };
};

module.exports = {
    validateRegisterData,
    validateLoginData
}; 