const express = require("express");
const router = new express.Router();
const Register = require("../models/registers");
const Qeries = require("../models/contactus");
const Eximreg = require("../models/eximreg");
const Imgprofile = require("../models/profileimg");

router.post("/register", async (req, res) => {
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

router.get("/test", (req, res) => {
  Imgprofile.find({ email: "krvivi28@gmail.com" }, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.render("imagepage", { item: items.img });
    }
  });
});

router.post("/eximreg", async (req, res) => {
  try {
    const eximdata = new Eximreg(req.body);
    const data = await eximdata.save();

    res.status(200).render("succes", { role: data.tradeRole });
    // alert("you have successfully registered for srisriport!!  login to continue");
  } catch (err) {
    res.status(401).send(err);
  }
});
router.post("/clientregister", async (req, res) => {
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
router.post("/contactus", async (req, res) => {
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

// router.get("/login", (req, res) => {
//   res.render("profile");
// });

router.post("/login", async (req, res) => {
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

router.post("/getimg", async (req, res) => {
  try {
    const email = req.body.email;
    const userData = await Imgprofile.findOne({ email: email });
    console.log(userData.img);

    res.status(200).render("register", { image: userData.email });
  } catch (err) {
    res.status(401).send(err);
  }
});

router.post("/clientlogin", async (req, res) => {
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

module.exports = router;
