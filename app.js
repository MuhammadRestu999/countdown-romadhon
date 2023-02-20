const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"));
console.log("Running at Port", app.get("port"));
