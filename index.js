const express = require("express");
const app = express();
const router = express.Router();
const auth = require("./middleware/auth");
const user = require("./routes/user");
const course = require("./routes/course")

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "DONE" });
});

app.use("/user", user);
app.use("/course",course)



app.listen(3000, () => {
  console.log(`app listening on port 3000`);
});
