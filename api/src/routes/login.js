const { Router } = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const { Users } = require("../db.js");
const router = Router();
const { v4: uuidv4 } = require("uuid");
const session = require("express-session");
const bcrypt = require("bcrypt");
const transporter = require("../controllers/emailLogin.js");

const initializePassport = require("../passportLogin.js");
initializePassport(
  passport,
  (email) => Users.findOne({ where: { email: email } }),
  (id) => Users.findByPk({ where: { id: id } })
);

router.use(
  cookieSession({
    name: "login-session",
    keys: ["key3", "key4"],
  })
);

const succesLoginUrl = "http://localhost:3000/home";

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.json([]);
  }
};

router.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

router.use(passport.initialize());
router.use(passport.session());

router.get("/login", (req, res) =>
  res.send("Usuario Creado Satisfactoriamente")
);
router.get("/fail", (req, res) => res.json([]));
router.get("/func", (req, res) => res.json(succesLoginUrl));
router.get("/loguser", isLoggedIn, (req, res) => res.json(req.user));



router.post("/register", async function (req, res) {
  const id = uuidv4();

  let data = { ...req.body, id };
  let errors = [];
  const passHash = await bcrypt.hash(data.password, 10);
  if (!data.fullName || !data.email || !data.password) {
    errors.push({ message: "Por favor llene todos los campos" });
  }
  try {
    const userDb = await Users.findOne({ where: { email: data.email } });
    if (userDb) {
      res.json([]);
    } else {
      if (data.email === "tukiteckpf@gmail.com") {
        const createdUser = await Users.create({
          fullName: data.fullName,
          email: data.email,
          password: passHash,
          isAdmin: true,
        });
      } else {
        const createdUser = await Users.create({
          fullName: data.fullName,
          email: data.email,
          password: passHash,
          isAdmin: data.isAdmin,
        });
      }

      await transporter.sendMail({
        from: "tukiteckpf@gmail.com",
        to: data.email,
        subject: "Registro Usuario",
        html: `
        <html>
    <head>
    <style type="text/css">
    .containergral {
        align-content: center;
        justify-content: center;
        padding: 30px;
        position: relative;
        background: #EFEFEF;
        }
    h1 {
        color: #000000CC;
    }
    .unorderlist {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: #F7F7F7;
        color: #000000CC;
      }
    .img-card {
        margin-left: 25%;
        margin-top: 20px    
    }
    .ap{
        text-decoration: none;
    }
    
    </style>
    </head>
    <body>
    <div class="containergral">
    <b> Muchas gracias por registrarte en Tukiteck!!</b>
    </hr>
    </hr>
    </div>
    </body>
    </html>
               
                `,
      });
      return res.redirect("/login");
    }     
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});


router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/func",
    failureRedirect: "/fail",
  })    
);

router.get("/out", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/deslog");
});


module.exports = router;
