const mongoose = require("mongoose");
const WidgetMod = mongoose.model(
  "Widget",
  new mongoose.Schema({
    name : String,
    tpye : String,
    bgColor: String,
    activeCode: String,
    updateCode: String,
    parameter : {},
  },{ collection: 'widgets' })
);
module.exports = WidgetMod;

