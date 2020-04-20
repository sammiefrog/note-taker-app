//requiring express
const express = require("express");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));

//routes
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

//listening
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});