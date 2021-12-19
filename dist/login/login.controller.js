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
exports.LoginVoter = void 0;
const service_1 = require("../services/service");
class LoginVoter {
    constructor() {
        this.orgservice = new service_1.OrgService();
        this.loginUser = this.loginUser.bind(this);
    }
    loginUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.query.id;
            const { body } = req;
            try {
                let response = yield this.orgservice.loginUser(id, body);
                res.send(response);
            }
            catch (error) {
                let v = error;
                if (v.name === 'HTTPError') {
                    // throw new Api404Error('invalid login credentials')
                    return res.status(400).send({ message: 'invalid login credentials' });
                }
                next(error);
            }
        });
    }
}
exports.LoginVoter = LoginVoter;
