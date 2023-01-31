const mongoose = require("mongoose")
const serviceSchema = mongoose.Schema({
    icon: String,
    title: String,
    text: String,
    leftButton: String,
    leftLink: String,
    rightButton: String,
    rightLink: String
})

module.exports=mongoose.model("services", serviceSchema)