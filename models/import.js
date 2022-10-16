const mongoose = require('mongoose');
const validator = require('validator');

const importSchema = new mongoose.Schema({
    importcat:
    {
        type: String,
        


    },
    importreg:
    {
        type: String
    },
    howmuch:
    {
        type: Number,
       

    },
    impunit:
    {
        type: String,

    },


    date:
    {
        type: Date,
        default: Date.now

    },
  

});
const Importuser = new mongoose.model("Importuser",importSchema );
module.exports = Importuser;


