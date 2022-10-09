const mongoose = require('mongoose');
const validator = require('validator');

const productlistSchema = new mongoose.Schema({
   
   
    email:
    {
        type: String,
       

    },
    img:
    {
        
      type: String
    }

  

});
const Productlist = new mongoose.model("Productlist", productlistSchema);
module.exports = Productlist;


