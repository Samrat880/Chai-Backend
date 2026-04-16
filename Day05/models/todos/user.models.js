import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [ true, "Password is required"] // we use array over here to send the message that we required password 
    }
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)