const constants = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    const error = {
        title: 'Error',
        message: err.message,
        stackTrace: err.stack,
    };

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            error.title = 'Validation Failed';
            res.json(error);
            break;
        case constants.UNAUTHORIZED:
            error.title = 'Unauthorized';
            res.json(error);
            break;
        case constants.FORBIDDEN:
            error.title = 'Forbidden';
            res.json(error);
            break;
        case constants.NOT_FOUND:
            error.title = 'Not Found';
            res.json(error);
            break;
        case constants.SERVER_ERROR:
            error.title = 'Server Error';
            res.json(error);
            break;
        default:
            break;
    }
};

module.exports = errorHandler;
