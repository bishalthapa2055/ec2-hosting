import express from "express";
import { json } from "body-parser";
import cors from "cors";
const app = express();

app.use(cors())
app.set("trust proxy", true);
app.use(express.urlencoded({extended : false}))
app.use(json());



// app.all("/", (req , res) =>{
//     res.status(200).json({status : true , message : "Server is Live"})
// })


app.get("/", (req , res) =>{
    res.status(200).json({status : true , message : "Server Live from express"})
})


app.get("/users", (req , res) =>{
    res.status(200).json({
        status : true ,
        message : "Hello from users !!!"
    })
})


export { app }