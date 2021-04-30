const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "skill",
    },
  ],
  area: {
    type: Schema.Types.ObjectId,
    ref: "area",
  },
});

module.exports = mongoose.model("company", companySchema);
