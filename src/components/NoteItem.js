import { useContext } from 'react'
import noteContext from '../context/Notes/noteContext'

const NoteItem = ({ note, updateNoteModal, showAlert }) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title"> {note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <figcaption className="blockquote-footer">{note.tag}</figcaption>
                    <div className='d-flex flex-row-reverse'>
                        <i className="fa-regular fa-trash-can mx-2" onClick={() => { deleteNote(note._id); showAlert("Deleted Successfully", "success") }}></i>
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNoteModal(note) }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem