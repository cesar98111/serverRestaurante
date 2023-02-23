import express from 'express'
import {createServer} from 'http'
import cors from 'cors'
import helmet from 'helmet'
import router from '../routes/restaurant.router.mjs'

const app = express()

app.disable('x-powered-by')
app.disable('etag')

app.use(helmet())
app.use(express.json())

app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/api/restaurant',router)


const server = createServer(app)

const startServer = () =>{
    server.listen(8000,()=>{
        console.log("server encendido")
    })
}

const finishServer = () =>{
    server.close()
}

export{
    startServer
}




