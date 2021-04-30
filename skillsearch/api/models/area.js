const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const areaSchema = new mongoose.Schema({
  areaName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("area", areaSchema);
