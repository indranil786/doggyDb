const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database Connected Successfully")
    }
    catch (err) {
        return console.log(err);
    }
}
const db = {};
db.Dogs = require("./dog");;
db.connectDb=connectDb;
module.exports=db;