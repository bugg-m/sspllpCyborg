const express = require('express')
const path=require('path');
const app = express();
const hbs=require('hbs');
const port = 80;
const staticPath=path.join(__dirname,'public');
const tempPath=path.join(__dirname,'templates/views');
const partPath=path.join(__dirname,'templates/partials');




app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",tempPath);
hbs.registerPartials(partPath);


app.get('/', (req, res) => {
  res.render("index");
})
app.get('/vision', (req, res) => {
  res.render("vision");
})
app.get('/contact', (req, res) => {
  res.render("about");
})
app.get('/login', (req, res) => {
  res.render("login");
})
// app.get('/about', (req, res) => {
//   res.json([{id:1,name:"vivek"},
//   {id:1,name:"vivek"},{id:1,name:"vivek"}])
// })
app.get('/about/*',(req,res)=>
{
  res.status(404).render("404",{err:"about ka andar ka page not found"});
})
app.get('*',(req,res)=>
{
  res.status(404).render("404",{err:"page not found"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})