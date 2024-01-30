import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        enum: ["user", "admin", "editor"],
        default: "user",
    },
});

export default model("User", userSchema, "users");
