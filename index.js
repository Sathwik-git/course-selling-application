const express = require("express");
const app = express();
const auth = require("./middleware/auth");
const user = require("./routes/user");
const course = require("./routes/course")
const admin = require("./routes/admin")

app.use(express.json());


app.use("/user", user);
app.use("/course",course)
app.use("/admin",admin)




app.listen(3000, () => {
  console.log(`app listening on port 3000`);
});
