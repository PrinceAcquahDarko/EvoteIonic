import express from 'express'
import cors from 'cors'
import OrgRouter  from './orgList/orgList.routes'
import loginRouter from './login/login.route'
import candidateRouter from './candidates/candidate.route'
import CandRouter from './votedCandidates/votedCand.route'

const app = express()


app.use(express.json())
app.use(cors())


app.use('/get/org', OrgRouter)
app.use('/post/login', loginRouter)
app.use('/get/candidates', candidateRouter)
app.use('/post/votes', CandRouter)




export {app}