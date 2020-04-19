//requirements
const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const dbjson = require("./db/db.json");
// const uuid = require('uuid');

// console.log(uuid.v4());
// let id = 0;
// var notePage = fs.readFileSync("db.json");
// var allTheNotes = JSON.parse(notePage);

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// let notes = [];

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//get html files
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"))
//   });

// app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "notes.html"))
//   });

//   app.get("/api/notes", function (req, res) {
//     // read db json file using fs and then:
//   readFileAsync("./db/db.json", "utf8").then (data => {
//     const notesJSON = JSON.parse(data)
//     // parse when reading, stringify while writing
//       console.log(notesJSON)
//       res.json(notesJSON)
//     })
//   });
  
//   app.post("/api/notes", function (req, res) {
//     let newNote = req.body
//     readFileAsync("./db/db.json", "utf8").then (data =>{
//       const notesJSON = JSON.parse(data);
//       notesJSON.push(newNote);
  
//       writeFileAsync("./db/db.json", JSON.stringify(notesJSON)).then(() => {
//         res.json(newNote);
//       })
//     })
//   });
//get the notes
// app.get("/api/notes", (req, res) => {
//     readFileAsync()
//     return res.json(dbjson);
// });

// //post the notes
// app.post("/api/notes", (req, res) => {
//     // var note = req.body; 
//     // id = content.length;
//     // note.id = `${id}`;

//     let note = req.body;
//     id = uuid.v4(note);
//     note.id = `${id}`

//     notes.push(note.id);

//     fs.writeFile("db.json", notes, (err) => {
//         if (err) throw err;
//         console.log("success");
//     });

//     res.json(true);
// });

// //delete the notes
// app.delete("/api/notes/:id", (req, res) => {

// });

//listening
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });