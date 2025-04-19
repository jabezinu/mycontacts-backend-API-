const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
    return password.length >= 6;
};

const validateRequired = (value, field) => {
    if (!value) {
        throw new Error(`${field} is required`);
    }
};

const sanitizeInput = (input) => {
    if (typeof input === 'string') {
        return input.trim();
    }
    return input;
};

module.exports = {
    validateEmail,
    validatePassword,
    validateRequired,
    sanitizeInput
}; 