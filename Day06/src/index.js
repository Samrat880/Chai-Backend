import "dotenv/config";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// dotenv.config({
//     path: './env'
// })

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at PORT : ${process.env.PORT}`)
    })
    app.on("error", (error) => {
        console.log("ERRR aa gya oye!!!! :", error)
        throw error
    })
})
.catch((err) => {
    console.log("Mongo DB connection failed!!!!", err)
} )

/*

// First approch 

import express from "express"
const app = express()

//use iife
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",() => {
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error:", error)
        throw error
    }
}) ()

*/
