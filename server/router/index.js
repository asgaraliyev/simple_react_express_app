const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    website: "Simple",
    address: "Baku,Azerbaijan",
    mail: "info@simple.com",
  });
});
module.exports = router;
