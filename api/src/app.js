import dotenv from "dotenv"
dotenv.config()

import './database'
import express from "express"
import socketio from "socket.io";
import http from "http";
import homeRoutes from "./routes/homeRoutes"
import doctorRoutes from "./routes/doctorRoutes"
import appointmentsRoutes from "./routes/appointmentsRoutes";
import userRoutes from "./routes/userRoutes";
import cors from 'cors';
import fileupload from "express-fileupload";

class App{
    constructor(){
        this.app = express()
        this.server = http.createServer(this.app);
        this.io = socketio(this.server, {
            cors: true,
            origins:["http://localhost:8080"],
        
        });
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json())

        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            this.app.use(cors());
            next();
        });

        this.app.use(fileupload());
        this.app.use(express.static("files"));
    }

    routes(){
        this.app.use('/',homeRoutes);
        this.app.use('/users/', userRoutes);
        this.app.use('/appointments/', appointmentsRoutes);
        this.app.use('/doctors/', doctorRoutes);
   
    }
}

App = new App()

export default (App);


