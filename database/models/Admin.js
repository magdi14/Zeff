const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const admin = new Schema({
  name: String,
  email: String,
  password: String,
  role: [{ type: Schema.Types.ObjectId, ref: "Role" }]
});

module.exports = mongoose.model("Admin", admin);
