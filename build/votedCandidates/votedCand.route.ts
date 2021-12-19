import express from 'express'
let Router = express.Router()
import {VotedCandModel} from './votedCand.controller'
import {Utility} from '../utility/utility'

let utility = new Utility()
let voters = new VotedCandModel()

function CandRouter(){
    Router.route('/')
        .post(utility.getID, voters.submitVotes)
        .get(voters.getVotes)
    Router.route('/allvotes')
        .get(voters.getAllRegVotes)
    Router.route('/individual')
        .get(utility.getID, voters.getIndividualVote)
    return Router
}

export default CandRouter()