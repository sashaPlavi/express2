const express = require("express");
const path = require("path");
const rootdir = require("../util/path");
const router = express.Router();
const products = [];
router.get("/addproduct", (req, res, next) => {
  res.render("product", { pagetitle: "products" });
});
router.post("/addproduct", (req, res, next) => {
  console.log("admin", req.body.title);
  products.push({ title: req.body.title });

  res.redirect("/");
});

exports.routes = router;

exports.products = products;
