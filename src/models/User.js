

const mongoose = require ("mongoose");

const userScheam = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        requierd: true,
    },
    role: {
        type: String,
        enum:["adimn", "student"],
        default: "student",
      },
},
{Timestamps:true});


const User = mongoose.model("User", userScheam);

module.exports = User;


