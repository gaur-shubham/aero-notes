import React, { useContext } from 'react'
import noteContext from '../context/Notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const UserNotes = () => {
    const context = useContext(noteContext);
    const { notes, addNote } = context;
    return (
        <div>
            <AddNote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </div>
    )
}

export default UserNotes