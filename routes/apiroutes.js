const path = require("path");
const fs = require("fs");
const dbjson = require("../db/db.json");
const uuid = require('uuid');

console.log(uuid.v4());

module.exports = app => {

    //get the notes when clicked
    app.get("/api/notes", (req, res) => {
        return res.json(dbjson);
    });

    //post the notes
    app.post("/api/notes", (req, res) => {
        let note = req.body; 
        let id = uuid.v4();
        note.id = `${id}`;

        dbjson.push(note);
    
        fs.writeFileSync("db.json", JSON.stringify(note), (err) => {
            if (err) throw err;
            console.log("success");
        });

        res.json(note);
    });
    
    //delete the notes
    app.delete("/api/notes/:id", (req, res) => {
    
    });
}