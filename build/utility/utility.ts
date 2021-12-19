import express from 'express'
import { Api404Error } from '../error/errors'
import jwt from 'jsonwebtoken'


export class Utility {
    secret = 'mySpecial'
    constructor(){this.getID = this.getID.bind(this)}

    getID(req: express.Request, res: express.Response, next: express.NextFunction){
        if(!req.header('Authorization'))
            throw new Api404Error('no user logged in')

        let token = req.header('Authorization')!.split(' ')[1]
        jwt.verify(token, this.secret, ((err: any, decoded: any) =>{
            if(decoded)
                req.query.id = decoded.id
        }) )
        
        next()
    }
}