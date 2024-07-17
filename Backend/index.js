import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js"
const app = express();


dotenv.config();

const PORT = process.env.PORT || 4000;
const MongoDb = process.env.MongoDBURL;

//connect to mongoDb

    try{ 
        mongoose.connect(MongoDb,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('connected to mongodb ')
    }

    catch(error){
        console.log(error);
    }

//defining routes 

app.use ('/book',bookRoute)



app.listen(PORT ,() =>{
    console.log(`server is running on port ${PORT}`)
})