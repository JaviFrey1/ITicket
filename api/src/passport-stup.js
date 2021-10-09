const { Users } = require("./db.js");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   Users.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// passport.use(new GoogleStrategy({
//     clientID: '606271626860-n6ttqfol40fnplghb6lr832bknsmp5u6.apps.googleusercontent.com',
//     clientSecret: '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',
//     callbackURL: "http://localhost:3001/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     console.log('USUARIOOOOOOOOO',profile.id)
//     Users.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "606271626860-n6ttqfol40fnplghb6lr832bknsmp5u6.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3001/google/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        googleId: profile.id,
      };

      const user = await Users.findOrCreate({
        where: { googleId: profile.id },
        defaults: defaultUser,
      }).catch((err) => {
        console.log("Error al logearse xdnt", err);
        cb(err, null);
      });
      if (user && user[0]) {
        return cb(null, user && user[0]);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  console.log("serializing user", user);
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  const user = await Users.findOne({ where: { id } }).catch((err) => {
    console.log("Error xdnt", err);
    cb(err, null);
  });

  console.log("Deserialized", user);
  if (user) cb(null, user);
});
