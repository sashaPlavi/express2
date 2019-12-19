const express = require("express");
const path = require("path");
const rootdir = require("../util/path");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // console.log("in the midlevare2");
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  console.log("shop", adminData.products[0].title);

  res.render("shop", {
    pagetitle: " sutra shop",
    products: adminData.products[0].title
  });
});

module.exports = router;
