const mongoose = require("mongoose")
const detailSchema = mongoose.Schema({
  brandName: String,
  brandImage: String,
  brandURL: String,
  links: [
    {
      label: String,
      url: String
    }
  ]
})

module.exports=mongoose.model("details", detailSchema)