const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  hash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
