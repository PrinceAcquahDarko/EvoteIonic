"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const orgList_routes_1 = __importDefault(require("./orgList/orgList.routes"));
const login_route_1 = __importDefault(require("./login/login.route"));
const candidate_route_1 = __importDefault(require("./candidates/candidate.route"));
const votedCand_route_1 = __importDefault(require("./votedCandidates/votedCand.route"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/get/org', orgList_routes_1.default);
app.use('/post/login', login_route_1.default);
app.use('/get/candidates', candidate_route_1.default);
app.use('/post/votes', votedCand_route_1.default);