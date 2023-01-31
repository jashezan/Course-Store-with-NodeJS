const express = require("express");
const routes = express.Router();
const Details = require("../models/Details");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");

routes.get("", async (req, resp) => {
  const data = await Details.findOne({ brandName: "EduHub" });
  const slides = await Slider.find();
  const services = await Service.find();
  resp.render("index", { data: data, slides: slides, services: services });
});

routes.post("/process-contact-form", async (req, resp) => {
  console.log(req.body);
  try {
    const data = await Contact.create(req.body);
  } catch (er) {
    console.log(er);
  }
  resp.redirect("/");
});

module.exports = routes;
