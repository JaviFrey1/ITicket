const { Users } = require("./db.js");
const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;



module.exports = function(passport){
  passport.use(
    new LocalStrategy({usernameField: 'email'}, (email, password, done)=>{
        Users.findOne({email: email})
        .then(user => {
          if(!user){
            return done(null, false, {message:'El email no esta registrado'});
          }

        })
        .catch(err => console.log(err));
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    Users.findByPk(id, function(err, user){
      done(err, user);
    })
  })

}