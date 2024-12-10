const express = require("express");
const app = express();
const auth = require("./middleware/auth");

app.use(express.json());


app.get("/", (req, res) => {
  res.json({ msg: "DONE" });
});
app.use(auth);
app.post("/signup", (req, res) => {});
app.post("/login", (req, res) => {});
app.post("/checkout", (req, res) => {});
app.get("/courses", (req, res) => {});

app.listen(3000, () => {
  console.log(`app listening on port 3000`);
});
