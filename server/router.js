const passport = require("passport");
const auth = require("./controllers/auth");
const passportService = require("./services/passport");

const requrieAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = (app) => {
  app.get("/", requrieAuth, (req, res) => {
    res.send({ hi: "there" });
  });
  app.post("/signin", requireSignin, auth.signin);
  app.post("/signup", auth.signup);
};
