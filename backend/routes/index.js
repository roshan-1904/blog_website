const express = require("express");
const router = express.Router();

router.use("/feedback", require("./feedback.routes"));
router.use("/gallery", require("./gallery.routes"));
router.use("/users", require("./user.routes"));
router.use("/adminindia", require("./adminindia.routes"));  
router.use("/adminusa", require("./adminusa.routes"));
router.use("/admincanada", require("./admincanada.routes"));


module.exports = router;
