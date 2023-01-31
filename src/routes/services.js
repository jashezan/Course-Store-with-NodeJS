const express = require("express");
const routes = express.Router();
const Details = require("../models/Details");
const Service = require("../models/Service");

routes.get("", async (req, resp) => {
  const data = await Details.findOne({ brandName: "EduHub" });
  const services = await Service.find();
  resp.render("services", { data: data, services: services });
});

module.exports = routes;
