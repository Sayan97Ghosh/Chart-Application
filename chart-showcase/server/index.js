const express = require("express");
const cors = require("cors");
const { connection } = require("./connection/db");
const { dataRoute } = require("./routes/data.routes");
const bodyParser = require('body-parser');

require('dotenv').config();


const app = express();
app.use(express.json());

app.use(cors({
    origin: "*",
  }
))


app.use("/",dataRoute)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// access port though env

const PORT = process.env.PORT || 8080

app.listen(PORT,async()=>{
    console.log("Server has started on Port no "+PORT)
    try{
        await connection;
        console.log("db connected")
    }catch(err){
        console.log("db not connected"+err.message)
    }
})