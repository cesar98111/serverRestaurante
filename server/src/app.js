import {startServer} from './server/server.mjs'

const startAplication = () =>{
    startServer()
}

const stopAplication = () =>{
    console.log("parando")
}

startAplication()