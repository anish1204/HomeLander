const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name:{
        type:String,
        min:5
    },
    mobileno:{
        type:String,
        min:10,
        max:10
    },
    email:{
        type:String,
        min:5
    },
    password:{
        type:String,
        min:8
    }   
})



module.exports = mongoose.model("User",User);