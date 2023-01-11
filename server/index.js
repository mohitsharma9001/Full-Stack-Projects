import express from "express";
// require('dotenv').config();
import { connection } from "./database/db.js";
import router from "./routes/Route.js"
import userRouter from "./routes/UserRoutes.js"
import cors from "cors";
import bodyParser from "body-parser";



const app = express();
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());
app.use("/",router);
app.use("/user",userRouter);

function logger (req,res,next) {
    console.log(req.path, new Date());
    next()
}

function setRequest(req, res, next) {
    req.context = {} 
    next();
}

app.use(logger)
app.use(setRequest)
app.use(userRouter)



const PORT = 8000;
connection();
app.listen(PORT,(res,req)=>{
console.log(`server is running on ${PORT}`)
})
