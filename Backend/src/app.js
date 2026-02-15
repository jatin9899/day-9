//  server create karna 
// server config karna


const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());


// http://localhost:3000/assets/index-CI0PxkSQ.js
app.use(express.static("./public"))


app.post("/api/notes", async(req, res) => {
    console.log(req.body)
    const {title, description} = req.body;

    const note = await noteModel.create({
        title, description

    })

    res.status(201).json({
        message: "Note created successfully",
        note
    })
})

app.get("/api/notes", async(req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})



// const note = []

// app.post("/api/notes",async(req, res) => {

//     const {title, description} = req.body;

//     const note = 
//         await noteModel.create({
//             title, description
//         })
    
//     res.status(201).json({
//         message: "Note created successfully",
//     })

// });

// app.get("/notes", (req, res) => {
//     res.status(200).json({
//         notes: notes,
//     })
// });


// app.delete('/api/notes/:id', (req, res) => {
//     const id= req.params.id;

//     console.log(id);
//     res.status(200).json({
//         message: "Note deleted successfully",
//     })
// })

app.delete("/api/notes/:index", async(req, res) => {
    const note = await noteModel.findByIdAndDelete(req.params.index);

    if (!note) {
        return res.status(404).json({
            message: "Note not found", 
        })
    }

   res.status(204).json({
    message: "Note deleted successfully",   
   })
});


app.patch("/api/notes/:index", async(req, res) => {
    const note = await noteModel.findByIdAndUpdate(req.params.index, req.body, {new: true});

    if (!note) {
        return res.status(404).json({
            message: "Note not found",
        })
    }

    res.status(200).json({
        message: "Note updated successfully",
        note
    })
});

// console.log(__dirname)

// app.use('*name',(req, res) => {
//    res.sendFile(path.join(__dirname,"..", "public/index.html"))
// })

module.exports = app;//  server start karna