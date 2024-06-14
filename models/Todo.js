const mongoose = require("mongoose");

const todoScheme = new mongoose.Schema(
    {
        title:{
            type:String,
            reqired:true,
            maxlength:50,
        },
        description:{
            type:String,
            required:true,
            maxlength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo", todoScheme);