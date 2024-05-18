const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name must bestring']
    },
    email:{
        type:String,
        required:[true,'email must be string'],
        unique:[true,'email must Unique']
    },
    password:{
        type:String,
        required:[true,'password must be string'],
    },
    todos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Todo",
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model("User",userSchema);

module.exports = User