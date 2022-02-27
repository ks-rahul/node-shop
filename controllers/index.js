const User = require("../models/user");

exports.postRegister = (req, res, next) => {
  res.send("POST Register");
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err) => {
      if (err) {
        console.log("error while user register!", err);
        return next(err);
      }

      console.log("user register!");

      res.redirect("/");
    }
  );
};
