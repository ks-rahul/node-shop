const express = require("express");
const router = express.Router();

/* GET post page. */
router.get("/", (req, res, next) => {
  res.send("Surf Shop - Post");
});

router.get("/new", (req, res, next) => {
  res.send("Surf Shop - Post new");
});

router.post("/create", (req, res, next) => {
  res.send("Surf Shop - Post create");
});

router.get("/:id", (req, res, next) => {
  res.send("Surf Shop - Post show");
});

router.get("/:id/edit", (req, res, next) => {
  res.send("Surf Shop - Post edit");
});

router.put("/:id", (req, res, next) => {
  res.send("Surf Shop - Post update");
});

router.delete("/:id", (req, res, next) => {
  res.send("Surf Shop - Post delete");
});

module.exports = router;
