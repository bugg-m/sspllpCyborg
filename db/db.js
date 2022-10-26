const mongoose = require('mongoose');
const db = "mongodb+srv://echo:vivek@cluster0.wunp6zs.mongodb.net/?retryWrites=true&w=majority";
const db2 = "mongodb+srv://echo:vivek28@srisriport.44soz6p.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db2).then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log("connection failed");
});