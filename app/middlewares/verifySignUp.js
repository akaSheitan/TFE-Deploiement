const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      next();
    });
  });
};
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }
  next();
};
checkMinimumRequire = (req, res, next) => {
  const validEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  let errors = [];

  if (!req.body.username) {
    errors.push("Username required.");
  }
  if (!req.body.email) {
    errors.push('Email required.');
  } else if (!validEmail(req.body.email)) {
    errors.push('Valid email required.');
  }
  if (!req.body.password) {
    errors.push('¨Password required.');
  } else if (req.body.password.length < 8) {
    errors.push('Valid password required. (8 caracter min.)');
  }

  if (errors.length) {
    res.status(401).send({
      message: `Failed! check form : ${errors}`
    });
    return;
  }
  next();
};


const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
  checkMinimumRequire
};
module.exports = verifySignUp;