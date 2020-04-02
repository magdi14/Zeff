const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const permission = new Schema({
  title: String,
});

module.exports = mongoose.model("Permission", permission);
