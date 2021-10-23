const { Users } = require("./db.js");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "816676161138-u0hs8q6ba7kvg6vk7j7tsflnm44imdjg.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: 'https://tukitukiteck.herokuapp.com/home/',
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      if(profile.emails[0].value === "tukiteckpf@gmail.com"){

        const defaultUser = {
          fullName: `${profile.name.givenName} ${profile.name.familyName}`,
          email: profile.emails[0].value,
          picture: profile.photos[0].value,
          googleId: profile.id,
          isAdmin: true
        }
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
        
      } else {
        const defaultUser = {
          fullName: `${profile.name.givenName} ${profile.name.familyName}`,
          email: profile.emails[0].value,
          picture: profile.photos[0].value,
          googleId: profile.id,
      }
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
    }
  )
);

passport.serializeUser((user, cb) => {
 
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  const user = await Users.findOne({ googleId: id , where: { id } }).catch((err) => {
    console.log("Error xdnt", err);
    cb(err, null);
  });

 
  if (user) cb(null, user);
});
