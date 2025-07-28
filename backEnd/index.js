require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

const aiFootball = require("./Routers/aiFootball");

app.use("/api", aiFootball);

app.listen(PORT, () => {
  console.log("SEVER RUNNING ON PORT:", PORT);
});
