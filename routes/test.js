const fs = require("fs");
const util = require("util");
const uuid = require("uuid");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const theNotes = app => {
//get the notes when clicked
    app.get("/api/notes", (req, res) => {

        readFileAsync("./db/db.json", "utf8").then(data => {
            const allTheNotes = JSON.parse(data);
            console.log(allTheNotes);
            res.json(allTheNotes);
        }).catch(err => console.log(err));

    });
//post the notes
    app.post("/api/notes", (req, res) => {
        let note = req.body; 
        let id = uuid.v4;
        note.id = `${id}`;

        readFileAsync("./db/db.json", "utf8").then(data => {
            const allTheNotes = JSON.parse(data);
            allTheNotes.push(note);

            writeFileAsync("./db/db.json", JSON.stringify(note)).then(() => {
                res.json(note);
            }).catch(err=> console.log(err));

        }).catch(err => console.log(err));

    });
    
    //delete the notes
    app.delete("/api/notes/:id", (req, res) => {
    //nothing yet
    });
};

module.exports = theNotes;