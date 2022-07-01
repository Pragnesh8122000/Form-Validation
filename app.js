//Modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//Env module having port 5000
require('dotenv').config


//getting get and post api from routes folder
const {getRoutes,postRoutes} = require('./routes/routes')

app.use(express.static("./"));

app.use(express.json());

//body parser having all type support not only json or text etc
app.use(bodyParser());

//get and post api requests from routes folder/file
app.use('/', getRoutes)
app.use('/submit', postRoutes)

//listening to port 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port :, ${PORT}`);
});







