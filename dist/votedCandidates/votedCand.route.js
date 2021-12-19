"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let Router = express_1.default.Router();
const votedCand_controller_1 = require("./votedCand.controller");
const utility_1 = require("../utility/utility");
let utility = new utility_1.Utility();
let voters = new votedCand_controller_1.VotedCandModel();
function CandRouter() {
    Router.route('/')
        .post(utility.getID, voters.submitVotes)
        .get(voters.getVotes);
    Router.route('/allvotes')
        .get(voters.getAllRegVotes);
    Router.route('/individual')
        .get(utility.getID, voters.getIndividualVote);
    return Router;
}
exports.default = CandRouter();
