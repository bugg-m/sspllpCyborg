const mongoose = require('mongoose');
const validator = require('validator');

const registerSchema = new mongoose.Schema({
    fname:
    {
        type: String,
        required: true,


    },
    lname:
    {
        type: String
    },
    email:
    {
        type: String,
        required: true,
        unique: [true, "email id already present"]
        // validate(value)
        // {
        //     if(!validator.isEmail(value))
        //     {
        //         throw new Error("enter valid email");
        //     }
        // }

    },
    mobile:
    {
        type: String,
        required: true,
        unique: [true, "mobile number is already registered!! login to continue"]

    },

    psw1:
    {
        type: String,
        required: true

    },
    psw2:
    {
        type: String,
        required: true

    },
    date:
    {
        type: Date,
        default: Date.now

    },
    img:
    {
        type:String,
       
    }
  

});
const Register = new mongoose.model("Register", registerSchema);
module.exports = Register;


