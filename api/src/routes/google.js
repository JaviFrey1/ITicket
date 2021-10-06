const { Router } = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");

const router = Router();

require("../passport-stup.js");

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

router.get("/", (req, res) => res.send("te deslogeaste"));
router.get("/failed", (req, res) => res.send("Fallo el log in con google"));
router.get("/good", isLoggedIn, (req, res) => res.send(`HOLA ${req.user.displayName}`));

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/good");
  }
);

router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});


module.exports = router;