const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    instagram:{
        type:Boolean
    },
    pinterest:{
        type:Boolean
    },
    youtube:{
        type:Boolean
    },
    category:{
        type:String,
        required:true
    },

})

module.exports = User = mongoose.model('User',UserSchema);