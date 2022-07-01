// Modules
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// get api connected to app.js via routes
const getFormData = (req, res) => {
  FormData = req.query;
  res.json(FormData);
  console.log(FormData.firstName);
};
// post api connected to app.js via routes
const postFormData = (req, res) => {
  res.json(req.body);
  const data = req.body;
  // Mongoose connection
  mongoose
    .connect("mongodb://localhost:27017/submit")
    .then(() => console.log("Database Connected Successfully...."))
    .catch((err) => console.log(err));
  // SCHEMA
  var DataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    Day: Number,
    month: String,
    year: String,
    email: String,
    mobileNumber: Number,
    gender: String,
    Address: String,
    pc: Number,
    City: String,
    State: String,
    COUNTRY: String,
    HOBBIES: Array,
    class10: Array,
    class12: Array,
    Graduation: Array,
    master: Array,
    COURSES: String,
  });
  // try this if there is no Error
  try {
    const Data = mongoose.model("Data", DataSchema);
    var Data1 = new Data(req.body);
    // save model to database
    Data1.save(function (err, data) {
      if (err) return console.error(err);
    });
    // Catch if error found by try block
  } catch (err) {
    console.log(err);
  }
  // NodeMailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pragnesh8122000@gmail.com",
      pass: "thiehaoyxxatmimv",
    },
  });
  // transmitter and reciever mails
  let myMailer = (output) => {
    let mailOptions = {
      from: "pragnesh8122000@gmail.com",
      to: "pragneshprajaoati@gmail.com",
      subject: "New User registered",
      html: output,
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        //log this if mail was not sent
        return console.log(error);
      } else {
        //log this if mail was sent
        console.log("Message sent:");
      }
    });
  };
  // call mailer function
  myMailer();
};
// Export module to routes folder
module.exports = { getFormData, postFormData };
