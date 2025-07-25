import mongoose from 'mongoose';

const Schema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    image:String,
});

module.exports=mongoose.model('PetSchema',Schema);