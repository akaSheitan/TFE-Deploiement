const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    location: String,
    data: [{
      _id: mongoose.Schema.Types.ObjectId,
      widgetId: String,
      bgcolor: String,
      position: Number,
      name: String,
      parameter:{}
    }],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  }, { collection: 'customer' })
);
module.exports = User;

