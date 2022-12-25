let express = require("express");
let app = express();
let path = require("path");

app.use(express.static("public"));
app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"));
console.log("Running at Port", app.get("port"));
