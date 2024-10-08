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
    res.status(200).json({status : true , message : "Server Live fdasf  asdfa  asdf dsfasdfasdrom express and the datas why is that "})
})
app.get("/apple", (req , res) =>{
    res.status(200).json({status : true , message : "Apple in the house "})
})
const data = [
    {id : 1 ,name  : "Boishl Thapa"},
    {id :2  , name : "Suraj Thapa"},
    {id : 3 , name : "Bikram THapa"},
    {id : 4 , name :"jeevan Aryal"},
    {id : 1 ,name  : "Boishl Thapa"},
    {id :2  , name : "Suraj Thapa"},
    {id : 3 , name : "Bikram THapa"},
    {id : 4 , name :"jeevan Aryal"}
]

app.get("/users", (req , res) =>{
    res.status(200).json({
        status : true ,
        datas : process.env.MONGO_URI ,
        count : data.length,
        data : data,
    })
})

app.get("/current", (req , res) =>{
    res.status(200).json({
        status : true ,
        datas :"currentRoutes "
    })
})

app.get("/actual", (req , res) =>{
    res.status(200).json({
        status : true ,
        datas :"actual routes "
    })
})

app.get("/apple" , (req , res ) =>{
    res.status(200).json({
        status : true ,
        message :"Hola from apples "
    })
})


export { app }
