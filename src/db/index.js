import mongoose from "mongoose";

import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         console.log(`MONGO DB CONNECTED !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {

        console.log(`MONGODB CONNECTION ERROR ${DB_NAME}`, error);
        process.exit(1)
        
    }
} 

export default connectDB