const express = require("express");
const router = express.Router();

const { postRegister } = require("../controllers/index");

/* user routes. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Surf Shop - Home" });
});

router.get("/register", (req, res, next) => {
  res.send("GET - user register");
});

router.post("/register", postRegister);

router.get("/login", (req, res, next) => {
  res.send("GET - user login");
});

router.post("/login", (req, res, next) => {
  res.send("POST - user login");
});

router.get("/profile", (req, res, next) => {
  res.send("GET - user profile");
});

router.put("/profile/:user_id", (req, res, next) => {
  res.send("PUT - user profile update");
});

router.get("/forgot-password", (req, res, next) => {
  res.send("GET - forgot-password");
});

router.put("/forgot-password", (req, res, next) => {
  res.send("PUT - forgot-password");
});

router.get("/reset-password/:token", (req, res, next) => {
  res.send("GET - reset-password/:token");
});

router.put("/reset-password", (req, res, next) => {
  res.send("PUT - reset-password");
});

module.exports = router;
