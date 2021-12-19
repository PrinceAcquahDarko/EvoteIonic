"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotedCandModel = void 0;
const model_1 = __importDefault(require("./model"));
const service_1 = require("../services/service");
class VotedCandModel {
    constructor() {
        this.orgservice = new service_1.OrgService();
        this.getAllRegVotes = this.getAllRegVotes.bind(this);
        this.getIndividualVote = this.getIndividualVote.bind(this);
        this.submitVotes = this.submitVotes.bind(this);
    }
    submitVotes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.query.id);
            let votersId = req.query.id;
            let orgId = req.body.orgId;
            req.body.votersId = req.query.id;
            try {
                let num = yield this.checkifVoted(votersId, orgId);
                if (num > 0) {
                    return;
                }
                let user = new model_1.default(req.body);
                let User = yield user.save();
                return res.status(200).send({ message: 'saved', User });
            }
            catch (error) {
                next(error);
            }
        });
    }
    getIndividualVote(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let votersId = req.query.id;
            let orgId = req.query.orgId;
            try {
                let num = yield this.checkifVoted(votersId, orgId);
                if (num)
                    return res.status(200).send({ num });
            }
            catch (error) {
                next(error);
            }
        });
    }
    checkifVoted(votersId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allvoters = yield model_1.default.find({ votersId, orgId });
                return allvoters.length;
            }
            catch (error) {
                throw (error);
            }
        });
    }
    getVotes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgId = req.query.id;
            try {
                let allvoters = yield model_1.default.find({ orgId });
                return res.status(200).send({ allvoters });
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAllRegVotes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgId = req.query.id;
            try {
                let response = yield this.orgservice.getallregVoters(orgId);
                res.send(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.VotedCandModel = VotedCandModel;
