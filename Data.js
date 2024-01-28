const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    AX: {
      type: Number,
      required: true,
    },
    AY: {
      type: Number,
      required: true,
    },
    AZ: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", dataSchema);
