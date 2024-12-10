const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "it's working" });
});

app.listen(3000, () => {
  console.log(`app listening on port 3000`);
});
