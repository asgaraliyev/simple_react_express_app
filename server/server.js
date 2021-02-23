const express = require("express");
const cors = require("cors");
const indexP = require("./router/index");
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use("/", indexP);
app.listen(PORT, () => {
  console.log("app listening on port " + PORT);
});
