import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "696e99d2025aa7c274818ef2",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes1 Title",
            "description": "this is my first note",
            "tag": "testing",
            "date": "2026-01-19T20:53:38.771Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    //Add a Note
    const addNote = (title, description, tag) => {
        //TODO : API call
        console.log("adding a new note");
        const note = {
            "_id": "696e99f3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = () => { }

    //Edit a Note
    const editNote = () => { }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;