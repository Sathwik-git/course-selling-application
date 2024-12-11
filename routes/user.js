const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "user route" });
});
router.post("/signup", (req, res) => {
  res.json({ msg: "user signup" });
});
router.post("/signin", (req, res) => {
  res.json({ msg: "user signin" });
});
router.get("/purchases", (req, res) => {
  res.json({ msg: "user route to purchase" });
});

module.exports = router;
