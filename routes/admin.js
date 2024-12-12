const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "admin" });
});

router.post("/signup", (req, res) => {
  res.json({ msg: "admin signup" });
});
router.post("/signin", (req, res) => {
  res.json({ msg: "admin signin" });
});
router.post("/course/create", (req, res) => {
  res.json({ msg: "create a course" });
});
module.exports = router;
