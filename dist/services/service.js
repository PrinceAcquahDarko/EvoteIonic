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
exports.OrgService = void 0;
const got_1 = __importDefault(require("got"));
class OrgService {
    getOrgs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, got_1.default)('https://shrouded-reef-90177.herokuapp.com/organization/getallOrgs');
                const { body } = response;
                return JSON.parse(body);
            }
            catch (error) {
                throw (error);
            }
        });
    }
    loginUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://shrouded-reef-90177.herokuapp.com/voters/auth?id=${id}`;
            console.log(url);
            try {
                const { body } = yield got_1.default.post(url, {
                    json: {
                        email: data.email,
                        password: data.password //req.body.password
                    }, responseType: 'json'
                });
                return body;
            }
            catch (error) {
                throw (error);
            }
        });
    }
    getAllCandidates(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // 618d4992edb79958bcd4e191
            const url = `https://shrouded-reef-90177.herokuapp.com/candidates?orgId=${id}`;
            try {
                const res = yield (0, got_1.default)(url);
                const { body } = res;
                return JSON.parse(body);
            }
            catch (error) {
                throw (error);
            }
        });
    }
    getallregVoters(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://shrouded-reef-90177.herokuapp.com/voters?orgId=${id}`;
            try {
                const res = yield (0, got_1.default)(url);
                const { body } = res;
                return JSON.parse(body);
            }
            catch (error) {
                throw (error);
            }
        });
    }
}
exports.OrgService = OrgService;
