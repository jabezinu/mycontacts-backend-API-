const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({
            success: false,
            error: message
        });
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        return res.status(400).json({
            success: false,
            error: message
        });
    }

    // JWT errors
    if (err.name === 'JsonWebTokenError') {
        const message = 'Invalid token';
        return res.status(401).json({
            success: false,
            error: message
        });
    }

    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Server Error'
    });
};

module.exports = errorHandler; 