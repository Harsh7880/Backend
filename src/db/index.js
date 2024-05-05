import mongoose from "mongoose";
import {DB_Name} from '../constants.js'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
        console.log(`\n MongoDB connected Successfully on host  : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection Failed");
        process.exit(1);
    }
  
}
 
export default connectDB;