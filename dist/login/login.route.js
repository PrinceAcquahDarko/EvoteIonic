"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let Router = express_1.default.Router();
const login_controller_1 = require("./login.controller");
let login = new login_controller_1.LoginVoter();
function loginRouter() {
    Router.route('/')
        .post(login.loginUser);
    return Router;
}
exports.default = loginRouter();
