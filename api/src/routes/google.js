const { Router } = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const  transporter  = require('../controllers/emailLogin.js');


const router = Router();

require("../passport-stup.js");

const succesLoginUrl = 'http://localhost:3000/login/success';


router.use(
  cookieSession({
    name: "tuto-session",
    keys: ["key1", "key2"],
  })
);

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

router.use(passport.initialize());
router.use(passport.session());

router.get("/deslog", (req, res) => res.send("te deslogeaste"));
router.get("/failed", (req, res) => res.send("Fallo el log in con google"));
router.get("/good", isLoggedIn, (req, res) => res.json(req.user));
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  async function (req, res) {
    // Successful authentication, redirect home.
  
    res.redirect(succesLoginUrl);
  }
);

router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/deslog");
});


module.exports = router;