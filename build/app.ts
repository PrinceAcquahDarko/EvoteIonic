import {app} from './server'
import mongoose from 'mongoose';

import {logError, returnError, isOperationalError} from './error/baseError'
const PORT = process.env.PORT!
const url = process.env.URL!

    mongoose.connect(url).then((data) => {
       console.log('we connected to database')

    })

app.use(logError)
app.use(returnError)

process.on('unhandledRejection', err => {
    throw err
})

process.on('uncaughtException', err =>{
    logError(err)

    if(!isOperationalError(err)){
        process.exit(1)
    }
})


app.listen(PORT, () => console.log('we listening on port', PORT))


