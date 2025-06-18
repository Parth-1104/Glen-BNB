import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import ClerkWebhook from './controllers/clerkWebhook.js';


connectDB()

const app=express()
app.use(cors())

//Middlewares 
app.use(express.json())

app.use(clerkMiddleware())



app.use("/api/clerk",ClerkWebhook);



app.get('/',(req,res)=>res.send("Api is working fine"))


const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server running on port no ${PORT}`);
})