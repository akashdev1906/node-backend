// require('dotenv').config()
import dotenv from "dotenv"
import { app } from "./app.js";

import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running is at PORT : ${process.env.PORT}`)
    })
})
.catch((err) => {
console.log("mongo connection failed", err)
})








// import express from "express";

// const app = express()

// ;(async () => {
//     try {
//         await Mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
//         app.on("error", (error)=> {
//             console.log("ERR", error);
//             throw error
//         })

//         app.listen(process.env.PORT,() => {
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.error("ERROR:", error)
//         throw err
        
//     }

// } )()