import express from 'express'
let Router = express.Router()
import {orgList} from './orgList.controller'

let orglist = new orgList()

function OrgRouter(){
    Router.route('/')
        .get(orglist.getAllOrg)

    return Router
}

export default OrgRouter()