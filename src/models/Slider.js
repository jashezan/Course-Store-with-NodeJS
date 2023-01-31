const mongoose = require("mongoose")
const sliderSchema = mongoose.Schema({
  image: String,
  title: String,
  subtitle: String,
  active: String
})

module.exports=mongoose.model("slider", sliderSchema)