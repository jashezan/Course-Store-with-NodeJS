const express = require("express")
const routes = express.Router()
const Details = require("../models/Details")

routes.get("", async(req, resp)=>{
  const data = await Details.findOne({"brandName": "EduHub"})
  resp.render("about", {data: data})
})

module.exports=routes