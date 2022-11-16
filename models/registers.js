const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

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
    date:
    {
        type: Date,
        default: Date.now

    },
    img:
    {
        type:String,
        // required: true
       
    },
    tokens:[
        {
            token:
            {
                type:String,
                required:true
            }
        }
    ]
  

});

registerSchema.methods.genAuthToken= async function()
{
    try {
        const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token});
        await this.save();
        return token;
        
    } catch (error) {
        console.log("some error occured"+error);
        
    }

}

registerSchema.pre("save", async function(next)
{
    if(this.isModified("psw1")) {
    this.psw1=await bcrypt.hash(this.psw1,10);
    }
    next();
})

const Register = new mongoose.model("Register", registerSchema);
module.exports = Register;


