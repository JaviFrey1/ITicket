const { Users } = require("./db.js");
const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail, getUserById){
  const authenticateUser =  async (email, password, done) => {
      const user = await getUserByEmail(email)
    
      if(user == null){
          return done(null, false)
      }
  
      try {

          if(await bcrypt.compare(password, user.password)){
                  return done(null, user)
          } else{
              return done(null, false)
          }
      } catch (e) {
          return done(e)
      }
     
  }
  
  passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser))
  passport.serializeUser((user, done) => done(null,user.id))
  passport.deserializeUser((id, done) => { return done(null,getUserById(id))})
  
  }
  
  module.exports = initialize;

// module.exports = function(passport){
//   passport.use(
//     new LocalStrategy({usernameField: 'email'}, (email, password, done)=>{
//         Users.findOne({where: {email: email}})
//         .then(user => {
//           if(!user){
//             return done(null, false, {message:'El email no esta registrado'});
//           }

//         })
//         .catch(err => console.log(err));
//     })
//   );

//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function(id, done){
//     Users.findByPk(id, function(err, user){
//       done(err, user);
//     })
//   })

// }