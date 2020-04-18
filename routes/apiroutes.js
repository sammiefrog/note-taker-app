const path = require("path");
const fs = require("fs");
// const noteFile = fs.readFileSync("db.json");
// const allTheNotes = JSON.parse(noteFile);
const uuid = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

console.log(uuid.v4());

module.exports = app => {

    //get the notes when clicked
    app.get("/api/notes", (req, res) => {
        readFileAsync("../db/db.json", "utf8").then(data => {
            let allTheNotes = JSON.parse(data)
            console.log(allTheNotes)
            return res.json(allTheNotes);
        })

    });

    //post the notes
    app.post("/api/notes", (req, res) => {
        let note = req.body; 
        let id = uuid.v4();
        note.id = `${id}`;

        readFileAsync("../db/db.json", "utf8").then(data => {
            let allTheNotes = JSON.parse(data);
            allTheNotes.push(note);

            writeFileAsync("../db/db.json", JSON.stringify(note)).then(() => {
                res.json(note);
            })
        })
    
        // fs.writeFileSync("../db/db.json", JSON.stringify(note), (err) => {
        //     if (err) throw err;
        //     console.log("success");
        // });
        // console.log(notes);
        // res.json(note);
    });
    
    //delete the notes
    app.delete("/api/notes/:id", (req, res) => {
    
    });
}