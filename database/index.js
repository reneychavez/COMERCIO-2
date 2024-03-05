
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://reneychaves1:Turbofast1@api-mongo.gn4aahy.mongodb.net/?retryWrites=true&w=majority&appName=Api-mongo")

mongoose.Promise = global.Promise;

module.exports = mongoose;