import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
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
            "_id": "696e99fs3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99sf3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99af3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025aad7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025ada7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "69a6e99f3025aa7c274818ef4",
            "user": "696e0d7f62775e9e76fe9929",
            "title": "Notes2 Title",
            "description": "this is my second note",
            "tag": "testing",
            "date": "2026-01-19T20:54:11.634Z",
            "__v": 0
        },
        {
            "_id": "696e99f3025aa7c274818esf4",
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
    const addNote = async (title, description, tag) => {
        //TODO : API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk2YmQ5ODM5ZWM4MDI3ZDM2YjE4YTU0In0sImlhdCI6MTc2ODY3NTk1MX0.SpsGmCGJf9KWdTR9-kdpJ8Xc9pT0-6EkyLcaI0RCgAU"
            },
            body: JSON.stringify({ title, description, tag }),

        });

        console.log("adding a new note");
        const note = {
            "_id": "696e99adf3025aa7c274818ef4",
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
    const deleteNote = (id) => {
        //TODO : API call
        console.log("deleting note: " + id);
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        console.log("editing note: " + id);
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk2YmQ5ODM5ZWM4MDI3ZDM2YjE4YTU0In0sImlhdCI6MTc2ODY3NTk1MX0.SpsGmCGJf9KWdTR9-kdpJ8Xc9pT0-6EkyLcaI0RCgAU"
            },
            body: JSON.stringify({ title, description, tag }),

        });
        const json = response.json();

        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;