const path = require('path');

//routes for the two html pages
const htmlRoutes = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
  });

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
  });
}

module.exports = htmlRoutes;