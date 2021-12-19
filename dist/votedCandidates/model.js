"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const VotedCandidateModel = new Schema({
    orgId: { type: String },
    votersId: { type: String },
    President: { type: String },
    Financial: { type: String },
    Wocom: { type: String },
    Organizer: { type: String },
    Treasure: { type: String },
    Secretary: { type: String },
    voted: { type: Boolean }
});
exports.default = mongoose_1.default.model('VotedCandidate', VotedCandidateModel);
