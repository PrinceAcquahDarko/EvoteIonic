import express from 'express'
import {OrgService} from '../services/service'

export class Candidate{
    private orgservice = new OrgService()

    constructor(){this.getAllCandidates = this.getAllCandidates.bind(this)}

    async getAllCandidates(req: express.Request, res: express.Response,  next: express.NextFunction){
        const id =  <string>req.query.id
        try {

            let response = await this.orgservice.getAllCandidates(id)
            res.status(200).send(response)

        } catch (error) {
            console.log(error)
            next(error)
            
        }
    }

  
}