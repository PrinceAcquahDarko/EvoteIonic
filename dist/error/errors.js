"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiInternalServer = exports.ApiBadRequest = exports.Api404Error = void 0;
const baseError_1 = require("./baseError");
const httpStatusCodes_1 = require("./httpStatusCodes");
class Api404Error extends baseError_1.BaseError {
    constructor(name, statusCode = httpStatusCodes_1.httpStatusCodes.NOT_FOUND, isOperational = true, description = 'Not found') {
        super(name, statusCode, isOperational, description);
    }
}
exports.Api404Error = Api404Error;
class ApiBadRequest extends baseError_1.BaseError {
    constructor(name, statusCode = httpStatusCodes_1.httpStatusCodes.BAD_REQUEST, isOperational = true, description = 'Bad Request') {
        super(name, statusCode, isOperational, description);
    }
}
exports.ApiBadRequest = ApiBadRequest;
class ApiInternalServer extends baseError_1.BaseError {
    constructor(name, statusCode = httpStatusCodes_1.httpStatusCodes.INTERNAL_SERVER, isOperational = true, description = 'Internal server Error') {
        super(name, statusCode, isOperational, description);
    }
}
exports.ApiInternalServer = ApiInternalServer;
