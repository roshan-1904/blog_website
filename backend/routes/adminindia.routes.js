// const express = require("express");
// const router = express.Router();
// const India = require("../models/India");

// router.post("/add", async (req, res) => {
//   const india = new India(req.body);
//   await india.save();
//   res.json({ message: "Saved Successfully" });
// });

// router.get("/", async (req, res) => {
//   const data = await India.find();
//   res.json(data);
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const India = require("../models/India");


router.post("/", async (req, res) => {
  const data = new India(req.body);
  await data.save();
  res.json({ message: "India data saved" });
});


router.get("/", async (req, res) => {
  const data = await India.find();
  res.json(data);
});

module.exports = router;
