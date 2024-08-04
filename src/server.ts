require('dotenv').config();
import { app } from './app';



const start = async() =>{
    console.log("Starting up........");
    const server = require("http").createServer(app);
      server.listen(process.env.port || 3000 , () => {
        console.log(
          `server sttarted at port:http://localhost:${process.env.port}`
        );
      });
}
start()