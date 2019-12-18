const express = require("express");
const path = require("path");
//const bodyparser = require('body-parser')

const app = express();
const routes = require("./routes/routes");

app.use(routes);
app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4001);
