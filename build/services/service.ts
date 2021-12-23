import got from 'got'

export class OrgService{
    
    async getOrgs(){
        try {

            const response = await got('https://shrouded-reef-90177.herokuapp.com/organization/getallOrgs')
            const {body} = response
            return JSON.parse(body)

        } catch (error) {
            throw(error)
        }
    }

    async loginUser(id: string, data:any){
        const url = `https://shrouded-reef-90177.herokuapp.com/voters/auth?id=${id}`
        console.log(url)
        try {
           const {body}: any = await got.post(url,{
               json:{
                   email: data.email, //we will pass in req.body.email
                   password: data.password //req.body.password
               }, responseType: 'json'
           }) 
           return body
        } catch (error) {
            throw(error)
        }
    }

    
    async getAllCandidates(id: string){
        // 618d4992edb79958bcd4e191
        const url = `https://shrouded-reef-90177.herokuapp.com/candidates?orgId=${id}`
        try {
           
            const res = await got(url)
            const {body} = res
            return JSON.parse(body)
             
        } catch (error) {
            throw(error)
            
        }
    }



    async getallregVoters(id: string){
        const url = `https://shrouded-reef-90177.herokuapp.com/voters?orgId=${id}`
        try {
           
            const res = await got(url)
            const {body} = res
            return JSON.parse(body)
             
        } catch (error) {
            throw(error)
            
        }
    }

}