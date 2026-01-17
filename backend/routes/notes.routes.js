const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Notes');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//ROUTE 1: Get all the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes)
})

//ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const { title, description, tag } = req.body;
    // If there are errors, return bad request and the errors.(express validator)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

})

//ROUTE 3: Update a already existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        //create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //check if valid user is updating a note and not someone else's note.
        // find the note to be updated by ID
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        //if everyting goes fine, then we finally update the note.
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

//ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //check if valid user is deleting a note and not someone else's note.
        // find the note to be deleted by ID
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }
        //Allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        //if everyting goes fine, then we finally delete the note.
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router