import express from 'express'
import {OrgService} from '../services/service'

export class orgList{
    private orgservice = new OrgService()
    
    constructor(){ this.getAllOrg = this.getAllOrg.bind(this); }

    async getAllOrg(req: express.Request, res: express.Response, next: express.NextFunction){
        try {

            let response = await this.orgservice.getOrgs()
            res.send(response.allorg)

        } catch (error) {
            next(error)
        }
    }

  

}