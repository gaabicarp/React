const express = require('express');
const router = express.Router();
const AuthCtrl = require('../controllers/AuthController');
const passport = require('passport');
require('../passport');

router
    .route("/login")
    .post(AuthCtrl.login)
    .get(
        passport.authenticate("jwt", { session: false }),
        (req, res) => {
          userModel
            .findOne({ _id: req.user.id })
            .then(user => {
              res.json(user);
            })
            .catch(err => res.status(404).json({ error: "User does not exist!" }));
        }
      );

module.exports = router;
