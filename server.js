//requiring express
const express = require("express");
const path = require("path");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
// require("./routes/")(app);
// require("./routes/")(app);
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"))
  });


//listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });