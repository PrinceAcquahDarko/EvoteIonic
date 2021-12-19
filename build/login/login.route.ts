import express from 'express'
let Router = express.Router()
import {LoginVoter} from './login.controller'

let login = new LoginVoter()

function loginRouter(){
    Router.route('/')
        .post(login.loginUser)

    return Router
}

export default loginRouter()