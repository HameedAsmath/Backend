const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        require: [true,"Name is required"],
        type: String,
        trim: true,
        maxlength: [25,"Name should be less than 25 characters"]
    },
    email:{
        require: [true,"Email is required"],
        unique: true,
        type: String
    }
})


module.exports = mongoose.model("User",userSchema)