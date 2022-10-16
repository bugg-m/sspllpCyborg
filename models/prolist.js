const mongoose = require('mongoose');
const validator = require('validator');

const productlistSchema = new mongoose.Schema({
   
  productName:
  {
    type:String,
  },
  supplyAbility:
  {
    type:Number,
  },
  minPrice:
  {
    type:Number,
  },
  maxPrice:
  {
    type:Number,
  },
  moq:
  {
    type:Number,
  },
  specialOffer:
  {
    type:String,
  },
 paymentTerms:
  {
    type:String,
  },
  processingTime:
  {
    type:String,
  },
  availabilityOfSample:
  {
    type:String,
  },
  eximTandC:
  {
    type:String,
  },
  pricePerSample:
  {
    type:String,
  },
  modelNumber:
  {
    type:String,
  },
  overview:
  {
    type:String,
  },
  design:
  {
    type:String,
  },
  sizeAndDimensions:
  {
    type:String,
  },
   
  sizeAndDimensions:
  {
    type:String,
  },
   
    email:
    {
        type: String,
    },
   material:
    {
        type: String,
    },
    color:
    {
        type: String,
    },
    features:
    {
        type: String,
    },
    type:
    {
        type: String,
    },
    generalUse:
    {
        type: String,
    },
    afterSaleService:
    {
        type: String,
    },
    applications:
    {
        type: String,
    },
    packaging:
    {
        type: String,
    },
   

    imgs:[String]

  

});
const Productlist = new mongoose.model("Productlist", productlistSchema);
module.exports = Productlist;


