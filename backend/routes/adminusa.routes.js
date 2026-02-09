const express = require("express");
const router = express.Router();
const Usa = require("../models/Usa");

router.post("/", async (req, res) => {
  const data = new Usa(req.body);
  await data.save();
  res.json({ message: "USA data saved" });
});

router.get("/", async (req, res) => {
  const data = await Usa.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;
