const express = require("express");
const routerWeb = new express.Router();
const cookieParser=require("cookie-parser");
const auth=require("../middleware/auth");

// Get request to go to home page
routerWeb.get("/", (req, res) => {
  res.render("index");
});
// Get request to go to home page
routerWeb.get("/productlist", auth , (req, res) => {
  res.render("productlistform");
});


// Get request for dev test
routerWeb.get("/test", auth, (req, res) => {
  res.render("test");
});
routerWeb.get("/importlogin", (req, res) => {
  res.render("importlogin");
});

routerWeb.get("/profile", (req, res) => {
  res.render("profile");
});

routerWeb.get("/export",auth, (req, res) => {
  res.render("exim");
});
routerWeb.get("/import",auth, (req, res) => {
  res.render("importuserdata");
});

routerWeb.get("/mktplace", (req, res) => {
  res.render("mktplace");
});
routerWeb.get("/logout", auth, async (req, res) => {
  try {

    // for single logout
    // req.user.tokens=req.user.tokens.filter((ele)=>
    // {
    //   return ele.token !== req.token

    // })

    // to logout from all devices 
    req.user.tokens=[];



    res.clearCookie("jwt");
    console.log("logout successful");
    await req.user.save();
    res.render("reglog");
    
  } catch (error) {
    res.status(500).send(error);
    
  }
});
routerWeb.get("/contact", (req, res) => {
  // console.log(`this is our ${req.cookies.jwt}`);
  res.render("contact");
});

routerWeb.get("/reglog", (req, res) => {
  res.render("reglog");
});
// routerWeb.get("/ourteam", (req, res) => {
//   res.render("ourteam");
// });
routerWeb.get("/upgrade", auth, (req, res) => {
  res.render("plans");
});


routerWeb.get("*", (req, res) => {
  res.status(404).render("404", { err: "page not found" });
});

module.exports = routerWeb;
