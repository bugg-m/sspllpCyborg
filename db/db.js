const mongoose = require('mongoose');
mongoose.connect(process.env.db_key).then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log("connection failed");
});