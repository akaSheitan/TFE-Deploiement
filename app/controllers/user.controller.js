const db = require("../models");
const User = db.user;
const WidgetMod = db.widgetMod;

var mongoose = require('mongoose');

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
        console.log("Data updated! :", data);
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
        // const dataWidget = data.data.forEach(element => {
        //   let widgetBase = {};
        //   WidgetMod.findOne({ id: "629a5ed82f6d9bf0c71333f9" },
        //     function (err, data) {
        //       if (err) {
        //         console.log(err);
        //       }
        //       else {
        //         console.log(data);
        //         widgetBase = data;
        //       }
        //     }
        //   );
        //   setTimeout(() => {
        //     // console.log("widget : ", widgetBase);
        //     // console.log("widget 2 : ", element);
        //     console.log("widget return : ", {
        //       widgetBase, element
        //     });
        //     return {
        //       ...widgetBase, ...element
        //     }
        //   }, 100)
        // });
        // console.log("data : ", dataWidget);
        // data.data = { ...dataWidget }
        res.status(200).send(data);
      }
    });
}
exports.addWidget = (req, res) => {
  var id = mongoose.Types.ObjectId();
  User.findByIdAndUpdate(req.body.userId,
    {
      $push: {
        data: {
          _id: id,
          widgetId: req.body.widgetId,
          bgcolor: req.body.bgcolor,
          position: req.body.position,
          name: req.body.name,
          parameter: {
            ...req.body.parameter
            // location: req.body.location
          }
        }
      },
    }, function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(data);
        console.log("Data updated! :", data);
      }
    }
  );
}

exports.delWidget = (req, res) => {
  User.findByIdAndUpdate(req.body.userId,
    {
      $pull: {
        data: {
           _id : req.body.deleteId 
          // _id: "62a25bd13e79a45703a92c62",
          // widgetId: "629a5ed82f6d9bf0c71333f9",
          // bgcolor: "#145374",
          // position: 1,
          // name: "Weather Mons",
          // parameter: {
          //   location: "Mons",
          // }
        }
      }
    }, function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(data);
        console.log("Data delete! :", data);
      }
    }
  );
}

