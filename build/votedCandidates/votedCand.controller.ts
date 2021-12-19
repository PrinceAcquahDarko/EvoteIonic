import express from 'express'
import VotedCandidateModel from './model'
import {OrgService} from '../services/service'



export class VotedCandModel{
    private orgservice = new OrgService()
    constructor(){this.getAllRegVotes = this.getAllRegVotes.bind(this);
         this.getIndividualVote = this.getIndividualVote.bind(this);
         this.submitVotes = this.submitVotes.bind(this)
        }

    async submitVotes(req: express.Request, res: express.Response, next: express.NextFunction){
        console.log(req.query.id)
        let votersId = req.query.id
        let orgId = req.body.orgId
        req.body.votersId = req.query.id
       try {
            let num = await this.checkifVoted(votersId, orgId)
            if(num > 0){
                return
            }

           let user = new VotedCandidateModel(req.body);
           let User = await user.save();
           return res.status(200).send({message: 'saved', User})
           
       } catch (error) {
          next(error) 
       }
    }

    async getIndividualVote(req: express.Request, res: express.Response, next: express.NextFunction){
        let votersId = req.query.id
        let orgId = req.query.orgId
        try {
            let num = await this.checkifVoted(votersId, orgId)
            if(num)
                return res.status(200).send({num})
        } catch (error) {
            next(error)
        }
    }



    async checkifVoted(votersId:any, orgId:any){
        try {
            let allvoters = await VotedCandidateModel.find({votersId, orgId})
            return allvoters.length
        } catch (error) {
            throw(error)
        }
     
    }


    async getVotes(req: express.Request, res: express.Response, next: express.NextFunction){
        let orgId = req.query.id
        try {
            let allvoters = await VotedCandidateModel.find({orgId})
            return res.status(200).send({allvoters})
        } catch (error) {
            next(error)
        }
    }

    async getAllRegVotes(req: express.Request, res: express.Response, next: express.NextFunction){
        let orgId = <string> req.query.id
        try {
            let response = await this.orgservice.getallregVoters(orgId)
            res.send(response)
        } catch (error) {
            next(error)
        }
    }
}