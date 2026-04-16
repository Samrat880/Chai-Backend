import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    diagonsedWith: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    BloodGroup: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        enum: ["Male","Female","Others"],
        required: true
    },
    admittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Hospital",
    }
},{timestamps:true})

export const Patient = mongoose.model('Patient', patientSchema);
