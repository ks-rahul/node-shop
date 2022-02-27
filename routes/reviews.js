const express = require("express");
const router = express.Router({ mergeParams: true });

/* review routes */
router.get("/", (req, res, next) => {
  res.send("Surf Shop - Review");
});

router.post("/create", (req, res, next) => {
  res.send("Surf Shop - Review create");
});

router.get("/:id/edit", (req, res, next) => {
  res.send("Surf Shop - Review edit");
});

router.put("/:id", (req, res, next) => {
  res.send("Surf Shop - Review update");
});

router.delete("/:id", (req, res, next) => {
  res.send("Surf Shop - Review delete");
});

module.exports = router;
