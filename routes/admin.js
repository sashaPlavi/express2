const express = require("express");
const path = require("path");
const rootdir = require("../util/path");
const router = express.Router();
router.get("/addproduct", (req, res, next) => {
  console.log("in the midlevare2");
  res.sendFile(path.join(rootdir, "views", "product.html"));
});
router.post("/addproduct", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

module.exports = router;
