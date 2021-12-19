"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let Router = express_1.default.Router();
const orgList_controller_1 = require("./orgList.controller");
let orglist = new orgList_controller_1.orgList();
function OrgRouter() {
    Router.route('/')
        .get(orglist.getAllOrg);
    return Router;
}
exports.default = OrgRouter();
