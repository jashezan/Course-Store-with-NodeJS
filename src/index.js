const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const bodyparser = require("body-parser");
const app = express();

const Details = require("./models/Details");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const Contact = require("./models/Contact");
const primary = require("./data");

const homeRoute = require("./routes/main");
const aboutRoute = require("./routes/about");
const contactRoute = require("./routes/contact");
const coursesRoute = require("./routes/courses");
const servicesRoute = require("./routes/services");

app.use("/static", express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/contact", contactRoute);
app.use("/courses", coursesRoute);
app.use("/services", servicesRoute);

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost/edu-hub", (err) => {
  if (err) {
    console.log("Cannot connect to DB");
  } else {
    console.log("Database Connected");
  }
  // Details.create(primary.detailsData);
  // Slider.create(primary.sliderData);
  // Service.create(primary.serviceData);
});

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

app.listen(process.env.PORT | 4000, (err) => {
  if (err) {
    console.log("Server cannot start");
  } else {
    console.log(`Server started at port: ${process.env.PORT | 3000}`);
  }
});
