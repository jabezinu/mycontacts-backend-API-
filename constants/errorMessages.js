const ERROR_MESSAGES = {
    VALIDATION: {
        REQUIRED_FIELD: (field) => `${field} is required`,
        INVALID_EMAIL: 'Please provide a valid email address',
        INVALID_PASSWORD: 'Password must be at least 6 characters long',
        INVALID_CREDENTIALS: 'Invalid credentials'
    },
    AUTH: {
        UNAUTHORIZED: 'Not authorized to access this route',
        FORBIDDEN: 'User role not authorized to access this route',
        USER_EXISTS: 'User already exists',
        USER_NOT_FOUND: 'User not found'
    },
    APPOINTMENT: {
        NOT_FOUND: 'Appointment not found',
        ALREADY_CANCELLED: 'Appointment is already cancelled',
        INVALID_DATE: 'Please provide a valid appointment date',
        PAST_DATE: 'Cannot book appointment for past date'
    },
    SERVER: {
        INTERNAL_ERROR: 'Internal server error',
        DATABASE_ERROR: 'Database operation failed'
    }
};

module.exports = ERROR_MESSAGES; 