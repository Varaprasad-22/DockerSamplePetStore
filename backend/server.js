import express from 'express';
// import mongoose from 'mongoose';
import petApi from './routes/petApi.js';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
const app = express();

app.use(express.json());
// Serve frontend static files
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'frontend-dist'))); // or '../frontend/build' for CRA


const client = new MongoClient(process.env.DB_URL);
async function connectToDatabase() {
    try {
        await client.connect();
            const pet_db = client.db('petData');
            const petCollection = pet_db.collection('pets');
            app.set('petCollection', petCollection);
       
        console.log('MongoDB connected successfully');
    } catch (e) {
        console.error('MongoDB connection failed:', e);
    }
}

connectToDatabase();

app.use('/pets', petApi);


// Catch-all route to serve index.html

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'frontend-dist','index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port",port))
