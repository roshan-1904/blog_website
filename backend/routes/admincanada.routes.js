const express = require("express");
const router = express.Router();
const Canada = require("../models/Canada");


router.post("/", async (req, res) => {
  const data = new Canada(req.body);
  await data.save();
  res.json({ message: "Canada data saved" });
});

router.get("/", async (req, res) => {
  const data = await Canada.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;
