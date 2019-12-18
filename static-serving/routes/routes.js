const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/user", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "user.html"));
});

router.use("/kichen", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "kichen.html"));
});
router.use("/main", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "main.html"));
});

module.exports = router;
