import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js';

dotenv.config({
    path : './env'
})

connectDB()
.then(()=> {
    app.on("error", (error)=>{
        console.log("server failed to listen on port", 8000);
        throw error;
    })
    app.listen(8000,()=>{
        console.log(`Server Started listening on port:`, 8000);
    })
})
.catch((err)=>{
    console.log("MongoDB Coonection Failed......",err);
});