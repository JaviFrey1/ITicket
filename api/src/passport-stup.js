const { Users } = require('./db.js')
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    Users.findById(id, function(err, user) {
      done(err, user);
    });
  });


passport.use(new GoogleStrategy({
    clientID: '606271626860-n6ttqfol40fnplghb6lr832bknsmp5u6.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3001/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('USUARIOOOOOOOOO',profile.id)
    Users.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));



