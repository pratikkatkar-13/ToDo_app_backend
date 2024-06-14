const express = require("express");
const app = express();


//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000

//middleware to parse the reqest body 
app.use(express.json());

//import routes from TODO API
const todoRoutes = require("./routes/todos");


//mount the todo APIS route
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send("<h1>this is home page</h1>")
})