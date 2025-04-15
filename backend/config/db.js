
const mongoose = require("mongoose")
require("dotenv").config();


const connection = mongoose.connect(process.env.Mongo_URI)

module.exports={
    connection
}