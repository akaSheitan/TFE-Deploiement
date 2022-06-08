const db = require("../models");
const User = db.user;
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
// exports.updateUser = (req, res) => {
//   User.findOne({
//     email: req.body.email,
//   }).updateOne({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     location: req.body.location,
//   }), res.status(200).send("Update done");
// }
exports.deleteUser = (req, res) => {

  res.status(200).send("Moderator Content.");
  // User.findOne({ email: req.body.email }).exec(res.status(200).send("User find"))
}
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.body.id,
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      location: req.body.location,
    }, function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(data);
        // res.status(200).send("Data updated!");
        console.log("Data updated! :" , data);
      }
    });
}
exports.findUser = (req, res) => {
  User.findOne({ email: req.body.email },
    function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).send(data);
      }
    });
}
