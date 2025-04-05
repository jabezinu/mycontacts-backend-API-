const STATUS_CODES = {
    SUCCESS: {
        OK: 200,
        CREATED: 201,
        NO_CONTENT: 204
    },
    CLIENT_ERROR: {
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        VALIDATION_ERROR: 422
    },
    SERVER_ERROR: {
        INTERNAL_SERVER_ERROR: 500,
        SERVICE_UNAVAILABLE: 503
    }
};

module.exports = STATUS_CODES; 