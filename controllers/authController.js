const authService = require('../services/authService');
const { validateLoginData, validateRegisterData } = require('../validators/authValidators');

const register = async (req, res, next) => {
    try {
        const { error } = validateRegisterData(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { error } = validateLoginData(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const result = await authService.login(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login
}; 