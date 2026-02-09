const mongoose = require("mongoose");

const usaSchema = new mongoose.Schema({
  videoLink: String,
  name: String,
  description: String,
  location: String,
  country: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Usa", usaSchema);
