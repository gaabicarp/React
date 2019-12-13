const express = require('express');
const router = express.Router();
const AuthCtrl = require('../controllers/AuthController');
const passport = require('passport');
require('../passport');
const userModel = require('../models/Users')

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

router
  .route("/google")
  .get(passport.authenticate('google', { scope: ['email', 'profile'] }));
        
router
  .route('/callback')
  .get(passport.authenticate('google',{session: false, failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/cities');
  });

module.exports = router;
