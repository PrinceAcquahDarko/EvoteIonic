"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let Router = express_1.default.Router();
const candidate_controller_1 = require("./candidate.controller");
let candidate = new candidate_controller_1.Candidate();
function candidateRouter() {
    Router.route('/')
        .get(candidate.getAllCandidates);
    return Router;
}
exports.default = candidateRouter();
