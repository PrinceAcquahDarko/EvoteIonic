import got from 'got'

export class OrgService{
    
    async getOrgs(){
        try {

            const response = await got('http://localhost:3000/organization/getallOrgs')
            const {body} = response
            return JSON.parse(body)

        } catch (error) {
            throw(error)
        }
    }

    async loginUser(id: string, data:any){
        const url = `http://localhost:3000/voters/auth?id=${id}`
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
        const url = `http://localhost:3000/candidates?orgId=${id}`
        try {
           
            const res = await got(url)
            const {body} = res
            return JSON.parse(body)
             
        } catch (error) {
            throw(error)
            
        }
    }



    async getallregVoters(id: string){
        const url = `http://localhost:3000/voters?orgId=${id}`
        try {
           
            const res = await got(url)
            const {body} = res
            return JSON.parse(body)
             
        } catch (error) {
            throw(error)
            
        }
    }

}