import React from "react";
import { deleteApiNote, archiveApiNote } from "../store/thunks/noteThunk.js";
import { showFormDate } from "../data/DataNote.jsx"
import { useDispatch } from "react-redux";


const NoteItem = ({ note }) => {

  const { id, title, body, createdAt, archived } = note;
  
  const dispatch = useDispatch();
  const hendleDeleteNote = () => {
    dispatch(deleteApiNote(id));
  }

  const handleArchiveNote = () => {
    // OnArchiveNote(note);
    const editNote = { ...note, archived: !note.archived };
    dispatch(archiveApiNote(editNote));
    console.log(editNote)
  }

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormDate(createdAt)}</p>
        <p className="note-item__body ">{body}</p>
      </div>
      <div className="note-item__action">
        <button onClick={hendleDeleteNote} className="note-item__delete-button">Delete</button>
        <button onClick={handleArchiveNote} className="note-item__archive-button">
          {archived ? "Unarchive" : "Archive"}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
