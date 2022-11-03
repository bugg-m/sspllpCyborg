const mongoose = require("mongoose");
const validator = require("validator");

const productlistSchema = new mongoose.Schema({
  email:
  {
    type: String
  },
  productName: {
    type: String,
  },
  supplyAbility: {
    type: String,
  },
  minPrice: {
    type: Number,
  },
  priceCurrency:
  {
    type: String,
  },
  maxPrice: {
    type: Number,
  },
  moq: {
    type: Number,
  },
  specialOffer: {
    type: String,
  },
  paymentTerms: {
    type: String,
  },
  paymentTermsManually: {
    type: String,
  },
  processingTime: {
    type: String,
  },
  availabilityOfSample: {
    type: String,
  },
  eximTandC: {
    type: String,
  },
  pricePerSample: {
    type: String,
  },
  modelNumber: {
    type: String,
  },
  overview: {
    type: String,
  },
  design: {
    type: String,
  },
  sizeAndDimensions: {
    type: String,
  },

  sizeUnit: {
    type: String,
  },

  material: {
    type: String,
  },
  color: {
    type: String,
  },
  features: {
    type: String,
  },
  type: {
    type: String,
  },
  generalUse: {
    type: String,
  },
  afterSaleService: {
    type: String,
  },
  applications: {
    type: String,
  },
  packaging: {
    type: String,
  },
  imgs: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  verified:
  {
    type: Boolean,
    default: false
  }
});
const Productlist = new mongoose.model("Productlist", productlistSchema);
module.exports = Productlist;
