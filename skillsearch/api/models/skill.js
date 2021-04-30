const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
  },
  area: {
    type: Schema.Types.ObjectId,
    ref: "area",
  },
});

module.exports = mongoose.model("skilll", skillSchema);
