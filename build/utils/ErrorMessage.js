"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultError = void 0;
const defaultError = (params) => {
    return {
        status: params.statusCode || 404,
        message: params.message || 'Something went wrong'
    };
};
exports.defaultError = defaultError;
