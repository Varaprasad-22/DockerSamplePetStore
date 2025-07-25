import express from 'express';
import mongoose from 'mongoose';
// import PetSchema from "../models/Schema";
const router = express.Router();

router.get('/items',async(req,res)=>{
    const petCollection=req.app.get('petCollection');
    try{
        const data=await petCollection.find().toArray();
        res.json(data);
    }catch(e){
        res.send({e,message:"Error While fetching/"})
    }
});

router.post('/addItems',async(req,res)=>{
    
    const petCollection=req.app.get('petCollection');
     try{
    const result=await petCollection.insertOne({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:req.body.image,       
    });
    res.json(result);
    }catch(e){
        res.send({e,message:"Error While fetching/"})
    }

})
export default router;
