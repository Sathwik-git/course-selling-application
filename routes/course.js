const express = require("express");
const router = express.Router();

router.post("/course/purchase", (req, res) => {});
router.get("/", (req, res) => {res.json({msg:"courses"})});

module.exports = router;