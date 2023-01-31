const mongoose = require("mongoose")
const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  query: String
})

module.exports=mongoose.model("queries", contactSchema)