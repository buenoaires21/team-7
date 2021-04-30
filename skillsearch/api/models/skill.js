const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 1,
  },
  area: {
    type: Schema.Types.ObjectId,
    ref: "area",
  },
});

module.exports = mongoose.model("skill", skillSchema);
