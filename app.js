require('dotenv').config();
const express = require("express");
var util = require("util");
require("./db/db");
const path = require("path");
const app = express();
const hbs = require("hbs");
const ejs = require("ejs");
const cookieParser=require("cookie-parser");
const port = process.env.PORT || 3000;


// Path set static and temp eng
const staticPath = path.join(__dirname, "public");
const tempPath = path.join(__dirname, "templates/views");
const partPath = path.join(__dirname, "templates/partials");
var multer = require("multer");
const fs = require("fs");
var encoder = new util.TextEncoder("utf-8");
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(staticPath));
// app.set("view engine", "hbs");
app.set("view engine", "ejs");
app.set("views", tempPath);
hbs.registerPartials(partPath);

// Using routing
const userWeb = require("./routes/webPageRoute");
const userRouter = require("./routes/routeUser");
app.use(userRouter);
app.use(userWeb);






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
