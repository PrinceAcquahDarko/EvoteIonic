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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candidate = void 0;
const service_1 = require("../services/service");
class Candidate {
    constructor() {
        this.orgservice = new service_1.OrgService();
        this.getAllCandidates = this.getAllCandidates.bind(this);
    }
    getAllCandidates(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.query.id;
            try {
                let response = yield this.orgservice.getAllCandidates(id);
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                next(error);
            }
        });
    }
}
exports.Candidate = Candidate;
