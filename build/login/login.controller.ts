import express from 'express'
import {OrgService} from '../services/service'
import {Api404Error} from '../error/errors'
export class LoginVoter{
    private orgservice = new OrgService()

    constructor(){this.loginUser = this.loginUser.bind(this)}


    async loginUser(req: express.Request, res: express.Response, next: express.NextFunction){
        const id = <string> req.query.id
    
        const {body} = req
        try {
            
            let response = await this.orgservice.loginUser(id,body)
            res.send(response)
        } catch (error) {
            
                let v: any = error
                if(v.name === 'HTTPError'){
                    // throw new Api404Error('invalid login credentials')
                   return  res.status(400).send({message: 'invalid login credentials'})
                }
                next(error)
            
            
        }
    }
}