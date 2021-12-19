"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperationalError = exports.returnError = exports.logErrorMiddleware = exports.logError = exports.BaseError = void 0;
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)();
class BaseError extends Error {
    constructor(name, statusCode, isOperational, description) {
        super(name);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.description = description;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}
exports.BaseError = BaseError;
function logError(err) {
    logger.error({ err: err });
}
exports.logError = logError;
function logErrorMiddleware(err, req, res, next) {
    logError(err);
    next(err);
}
exports.logErrorMiddleware = logErrorMiddleware;
function returnError(err, req, res, next) {
    res.status(err.statusCode || 500).send(err.message);
}
exports.returnError = returnError;
function isOperationalError(error) {
    if (error instanceof BaseError) {
        return error.isOperational;
    }
    return false;
}
exports.isOperationalError = isOperationalError;
