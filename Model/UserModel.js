const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    dob:{
        type:Date,
        require:false
    }
},{versionKey:false, timestamps:true}
)

module.exports = mongoose.model('user', userSchema)