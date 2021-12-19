import express from 'express'
let Router = express.Router()
import {Candidate} from './candidate.controller'

let candidate = new Candidate()

function candidateRouter(){
    Router.route('/')
        .get(candidate.getAllCandidates)

    return Router
}

export default candidateRouter()