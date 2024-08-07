import mongoose from "mongoose";
import { type } from "os";

//Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true})

// Model
const User = mongoose.model("User",userSchema);

export default User;