"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const mongoose_1 = __importDefault(require("mongoose"));
const baseError_1 = require("./error/baseError");
const PORT = process.env.PORT;
const url = process.env.URL;
mongoose_1.default.connect(url).then((data) => {
    console.log('we connected to database');
});
server_1.app.use(baseError_1.logError);
server_1.app.use(baseError_1.returnError);
process.on('unhandledRejection', err => {
    throw err;
});
process.on('uncaughtException', err => {
    (0, baseError_1.logError)(err);
    if (!(0, baseError_1.isOperationalError)(err)) {
        process.exit(1);
    }
});
server_1.app.listen(PORT, () => console.log('we listening on port', PORT));
