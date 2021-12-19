"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const errors_1 = require("../error/errors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
class Utility {
    constructor() {
        this.secret = process.env.SECRET;
        this.getID = this.getID.bind(this);
    }
    getID(req, res, next) {
        if (!req.header('Authorization'))
            throw new errors_1.Api404Error('no user logged in');
        let token = req.header('Authorization').split(' ')[1];
        jsonwebtoken_1.default.verify(token, this.secret, ((err, decoded) => {
            if (decoded)
                req.query.id = decoded.id;
        }));
        next();
    }
}
exports.Utility = Utility;
