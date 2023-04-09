const express =  require("express");
// const { Authentication } = require("../middlewares/Authentication");
// const { Blogmodel } = require("../models/blogs.model");
const { Datamodel } = require("../model/data.model");


const dataRoute = express.Router();




// create the data for multiple - POST

dataRoute.post("/",async(req,res)=>{
    const dataArray = req.body.data;

    // Validate input
    if (!dataArray || !Array.isArray(dataArray)) {
      return res.status(400).json({ error: 'Invalid input' });
    }
  
    // Save data to database
    Datamodel.insertMany(dataArray)
      .then(() => res.status(201).json({ success: true }))
      .catch(err => res.status(500).json({ error: err.message }));
})


dataRoute.get("/",async(req,res)=>{
    const {end_year} = req.query;
    console.log(end_year)
    const{sector} = req.query;
    const{topic} = req.query;
    const{country} = req.query;
    const{region} = req.query;
    const{source} = req.query;
    const{pestle} = req.query;
 

    if(end_year){
            
             Datamodel.find({end_year:end_year}).then((result)=>{
            console.log(result);
      res.status(200).json(result);
    })   //sending blogs data
      
    }
// this is for sector
    else if(sector){
        Datamodel.find({sector:sector}).then((result)=>{
            console.log(result);
      res.status(200).json(result);
        })

    }
    // this is for topic
    else if(topic){
        Datamodel.find({topic:topic}).then((result)=>{
            console.log(result);
      res.status(200).json(result);
        })

    }
    // this is for country
    else if(country){
        Datamodel.find({country:country}).then((result)=>{
            console.log(result);
      res.status(200).json(result);
        })

    }
    // this is for region
    else if(region){
        Datamodel.find({region:region}).then((result)=>{
            console.log(result);
      res.status(200).json(result);
        })

    }
    // this is for peltey
    else if(pestle){
        Datamodel.find({pestle:pestle}).then((result)=>{
            console.log(result);
      res.status(200).json(result);
        })

    }
    // this is for source
    else if(source){
        Datamodel.find({source:source}).then((result)=>{
            console.log(result);
      res.status(200).json(result);
        })

    }

    else{
        try{
            const blogData=await Datamodel.find()   //pagination
            res.status(200).send(blogData)      //sending blogs data
    
        }catch(err){
            res.status(404).send({msg:err.message})
        }
    
    }
   
})


// update a specific blog
module.exports={dataRoute}