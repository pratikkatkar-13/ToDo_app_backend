const mongoose = require('mongoose');

//importing env file data 
require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        
        useNewUrlParser:true,
        useUnifiedTopology:true,
})
.then(() => console.log("DB connect"))
.catch((error) => {
    console.log("issue in DB connection");
    console.log(error.message);
    process.exit(1);
});
}

module.exports = dbConnect;