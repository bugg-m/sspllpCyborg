const mongoose = require("mongoose");
const validator = require("validator");

const importSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  importCategory: {
    type: String,
  },
  importRegion: {
    type: String,
  },
  importRegionManual: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  quantityUnit: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
const Importuser = new mongoose.model("Importuser", importSchema);
module.exports = Importuser;
