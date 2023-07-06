const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('./models/User');  // path to your User model

passport.use(
  new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // if the user exists, log them in
            done(null, existingUser);
          } else {
            // if the user doesn't exist, create a new user and log them in
            new User({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value
              // Include any other properties you want to store
            })
            .save()
            .then((newUser) => done(null, newUser));
          }
        });
    }
  )
);
