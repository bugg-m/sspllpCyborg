const express = require("express");
var util = require("util");
require("./db/db");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const staticPath = path.join(__dirname, "public");
const tempPath = path.join(__dirname, "templates/views");
const partPath = path.join(__dirname, "templates/partials");
// const userRouter=require('./router/user');
const Register = require("./models/registers");
const Qeries = require("./models/contactus");
const Eximreg = require("./models/eximreg");
var encoder = new util.TextEncoder("utf-8");
// const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(userRouter);

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", tempPath);
hbs.registerPartials(partPath);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/profile", (req, res) => {
  res.render("profile");
});
app.get("/exim", (req, res) => {
  res.render("client");
});
app.get("/sell", (req, res) => {
  res.render("sell");
});
app.get("/product", (req, res) => {
  res.render("product");
});
app.get("/vision", (req, res) => {
  res.render("vision");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/blog", (req, res) => {
  res.render("sell");
});
app.get("/reglog", (req, res) => {
  res.render("reglog");
});
app.get("/ourteam", (req, res) => {
  res.render("ourteam");
});
app.post("/register", async (req, res) => {
  try {
    const p1 = req.body.psw1;
    const p2 = req.body.psw2;
    if (p1 === p2) {
      const reguser = new Register({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mobile: req.body.mobile,
        psw1: req.body.psw1,
        psw2: req.body.psw2,
      });
      const data = await reguser.save();

      res.status(200).render("index");
      // alert("you have successfully registered for srisriport!!  login to continue");
    } else {
      res.send("password mismatch");
    }
  } catch (err) {
    res.status(401).send(err);
  }
});
app.post("/eximreg", async (req, res) => {
  try {

    const reguser = new Eximreg({
      fname: req.body.fname,
      email: req.body.email,
      tradeRole: req.body.tradeRole,
      dob: req.body.dob,
      mobileNumber: req.body.mobileNumber,
      country: req.body.country,
      idType: req.body.idType,
      idNumber: req.body.idNumber,
      issuedAuthority: req.body.issuedAuthority,
      issuedCountry: req.body.issuedCountry,
      jobTitle: req.body.jobTitle,
      companyName: req.body.companyName,
      companyType: req.body.companyType,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      pincode: req.body.pincode,
      companyNumber: req.body.companyNumber,
      Landline: req.body.Landline,
      gstNumber: req.body.gstNumber,
      iecCode: req.body.iecCode,
      currentAccount: req.body.currentAccount,
      aoCode: req.body.aoCode,
      letsTalk: req.body.letsTalk,
      ifYes: req.body.ifYes,
      alternateMobileNumber: req.body.alternateMobileNumber,
      noIdont: req.body.noIdont,
    });
    const data = await reguser.save();

    res.status(200).render("succes", { role: data.tradeRole });
    // alert("you have successfully registered for srisriport!!  login to continue");

  } catch (err) {
    res.status(401).send(err);
  }
});
app.post("/clientregister", async (req, res) => {
  try {
    const p1 = req.body.psw1;
    const p2 = req.body.psw2;
    if (p1 === p2) {
      const reguser = new Register({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mobile: req.body.mobile,
        psw1: req.body.psw1,
        psw2: req.body.psw2,
      });
      const data = await reguser.save();

      res.status(200).render("exim");
      // alert("you have successfully registered for srisriport!!  login to continue");
    } else {
      res.send("password mismatch");
    }
  } catch (err) {
    res.status(401).send(err);
  }
});
app.post("/contactus", async (req, res) => {
  try {
    const queryofuser = new Qeries({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      query: req.body.query,
    });
    const data = await queryofuser.save();
    res.status(200).render("index");
  } catch (err) {
    res.status(401).send(err);
  }
});

// app.get("/login", (req, res) => {
//   res.render("profile");
// });

app.post("/login", async (req, res) => {
  try {
    const p1 = req.body.psw1;
    const email = req.body.email;
    const userData = await Register.findOne({ email: email });
    if (p1 === userData.psw1) {
      res.status(200).render("profile", { name: userData.fname });
    } else {
      res.status(400).send("invalid email or password!!");
    }
  } catch (err) {
    res.status(401).send(err);
  }
});
app.post("/clientlogin", async (req, res) => {
  try {
    const p1 = req.body.psw1;
    const email = req.body.email;
    const userData = await Register.findOne({ email: email });
    if (p1 === userData.psw1) {
      res.status(200).render("exim");
    } else {
      res.status(400).send("invalid email or password!!");
    }
  } catch (err) {
    res.status(401).send(err);
  }
});

// app.get('/about/*', (req, res) => {
//   res.status(404).render("404", { err: "about ka andar ka page not found" });
// })

app.get("*", (req, res) => {
  res.status(404).render("404", { err: "page not found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
