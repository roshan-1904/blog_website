const mongoose = require("mongoose");

const indiaSchema = new mongoose.Schema({
  videoLink: String,
  name: String,
  description: String,
  location: String,
  country: String
});

module.exports = mongoose.model("India", indiaSchema);
