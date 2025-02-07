import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import bookRoutes from "./routes/bookRoutes.js"
import cors from 'cors';

const app=express();

app.use(express.json());

//middlewear to handle cors policy
//option 1: allow all origins with default of cors(*)
app.use(cors());
// app.use(cors({
//     origin: "https://projects-omega-wheat.vercel.app/", // Allow requests only from frontend
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"]
//   }));

app.get('/' , (request,response)=>{
    console.log(request);
    return response.status(234).send('welcome to mern stack');
})

app.use('/books' , bookRoutes);

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to db');
    app.listen(PORT , ()=>{
        console.log(`App is using port : ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})