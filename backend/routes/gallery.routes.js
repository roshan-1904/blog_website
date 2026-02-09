const express = require("express");
const router = express.Router();
const Gallery = require("../models/Gallery");

router.post("/", async (req, res) => {
  const g = new Gallery(req.body);
  await g.save();
  res.json({ message: "saved" });
});

router.get("/", async (req, res) => {
  const data = await Gallery.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;

