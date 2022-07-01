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






// //GET request
// app.get("/", (req, res) => {
//   FormData = req.query;
//   res.json(FormData);
//   console.log(FormData.firstName);
// });
//POST request
// app.post("/submit", (req, res) => {
//   console.log("from submi>>>>>>>>>>>>>>>", req.body);
//   res.json(req.body);
//   const data = req.body;
//   //Mongoose connection
//   mongoose
//     .connect("mongodb://localhost:27017/submit")
//     .then(() => console.log("Database Connected Successfully...."))
//     .catch((err) => console.log(err));
//   //SCHEMA
//   var DataSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     Day: Number,
//     month: String,
//     year: String,
//     email: String,
//     mobileNumber: Number,
//     gender: String,
//     Address: String,
//     pc: Number,
//     City: String,
//     State: String,
//     COUNTRY: String,
//     HOBBIES: Array,
//     class10: Array,
//     class12: Array,
//     Graduation: Array,
//     master: Array,
//     COURSES: String,
//   });
//   try {
//     const Data = mongoose.model("Data", DataSchema);
//     var Data1 = new Data(req.body);
//     //   save model to database
//     Data1.save(function (err, data) {
//       if (err) return console.error(err);
//       console.log(">>>>>>>", data.firstName);
//     });
//   } catch (err) {
//     console.log(err);
//   }

//   NodeMailer transporter
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "pragnesh8122000@gmail.com",
//       pass: "thiehaoyxxatmimv",
//     },
//   });
//   //transmitter and reciever mails
//   let myMailer = (output) => {
//     let mailOptions = {
//       from: "pragnesh8122000@gmail.com",
//       to: "pragneshprajaoati@gmail.com",
//       subject: "New User registered",
//       html: output,
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {    //log this if mail was not sent
//         return console.log(error);
//       } else {  //log this if mail was sent
//         console.log("Message sent:");
//       }
//     });
//   };
//   // //call mailer function
//   // myMailer();
// // });


