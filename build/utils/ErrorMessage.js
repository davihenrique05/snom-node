"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultError = void 0;
const defaultError = (statusCode, message) => {
    return {
        status: statusCode || 404,
        message: message || 'Something went wrong'
    };
};
exports.defaultError = defaultError;
