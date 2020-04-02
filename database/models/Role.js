const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const role = new Schema({
  title: String,
  permissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }]
});

module.exports = mongoose.model("Role", role);
