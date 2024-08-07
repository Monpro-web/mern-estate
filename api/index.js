import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js';

//database connect
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
})

const app = express();


app.use('/api/user',userRouter);


app.listen(3000, ()=>{
    console.log("Server is running on port 3000!!!");
})