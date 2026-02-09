const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post("/", async (req, res) => {
  const f = new Feedback(req.body);
  await f.save();
  res.json({ message: "saved" });
});

router.get("/", async (req, res) => {
  const data = await Feedback.find();
  res.json(data);
});

module.exports = router;
