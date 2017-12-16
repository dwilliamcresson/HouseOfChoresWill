const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const exphbs = require("express-handlebars");
const orm = require("./config/orm.js");
const app = express();
const PORT = process.env.PORT || 8999;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



require("./controllers/routes.js")(app);


app.listen(PORT, function() {
  console.log("House is live on PORT: " + PORT);
});



