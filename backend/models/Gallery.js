const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  location: String,
  country: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Gallery", gallerySchema);

