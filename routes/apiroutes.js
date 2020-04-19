const fs = require("fs");
const util = require("util");
const uuidv4 = require("uuid/v4");
let jsonData = require("../db/db.json");

const writeFileAsync = util.promisify(fs.writeFile);

const theNotes = app => {
    //get the notes when clicked
    app.get("/api/notes", (req, res) => {
        res.json(jsonData);
    });
    //post the notes
    app.post("/api/notes", (req, res) => {

        let note = req.body;
        let id = uuidv4();
        note.id = id;

        jsonData.push(note);
        // now write back to the file
        writeFileAsync("./db/db.json", JSON.stringify(jsonData))
            .then(() => {
                res.json(note);
            })
            .catch((err) => console.log(err));
    });

    //delete the notes
    app.delete("/api/notes/:id", (req, res) => {
        //nothing yet
        console.log(req.params.id)
        let keptNotes = jsonData.filter(note => note.id !== req.params.id);
        jsonData = keptNotes;

        writeFileAsync("./db/db.json", JSON.stringify(jsonData))
            .then(() => {
                res.json(jsonData);
            }).catch((err) => console.log(err));
    });
};

module.exports = theNotes;