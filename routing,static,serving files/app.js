const express = require("express");
const path = require("path");
const rootdir = require("./util/path");
const bodyparser = require("body-parser");
const db = require("./util/database");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(express.static(path.join(rootdir, "public")));
app.use(bodyparser.urlencoded({ extended: false }));
db.execute("SELECT * FROM sys.products")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootdir, "views", "404.html"));
});

app.listen(4000);
