const express = require('express')
require("./db/db");
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const staticPath = path.join(__dirname, 'public');
const tempPath = path.join(__dirname, 'templates/views');
const partPath = path.join(__dirname, 'templates/partials');
// const userRouter=require('./router/user');
const Register = require("./models/registers");
// const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(userRouter);













app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", tempPath);
hbs.registerPartials(partPath);


app.get('/', (req, res) => {
  res.render("index");
})
app.get('/vision', (req, res) => {
  res.render("vision");
})
app.get('/contact', (req, res) => {
  res.render("contact");
})
app.get('/register', (req, res) => {
  res.render("register");
})
app.post('/register', async (req, res) => {

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

    }
    else {
      res.send("password mismatch");
    }

  }
  catch (err) {
    res.status(401).send(err);
  }

});
app.get('/login', (req, res) => {
  res.render("login");
})
// app.get('/about', (req, res) => {
//   res.json([{id:1,name:"vivek"},
//   {id:1,name:"vivek"},{id:1,name:"vivek"}])
// })
app.get('/about/*', (req, res) => {
  res.status(404).render("404", { err: "about ka andar ka page not found" });
})
app.get('*', (req, res) => {
  res.status(404).render("404", { err: "page not found" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})