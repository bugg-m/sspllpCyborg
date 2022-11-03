const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://echo:28101997viVekechoMadhu05022000@srisriport.44soz6p.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log("connection failed");
});