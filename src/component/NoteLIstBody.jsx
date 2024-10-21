import React, { useEffect } from 'react';
import NoteList from './NoteList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiNotes } from '../store/thunks/noteThunk';

// Tes AJa
const NoteLIstBody = () => {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.data);
  const keyword = useSelector((state) => state.notes.keyword);

  useEffect(() => {
    dispatch(fetchApiNotes());
  }, [dispatch]);

  const validNotes = notes.filter((note) => note && note.title);

  const filterNote = validNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const activeNote = filterNote.filter((note) => !note.archived);
  const archiveNote = filterNote.filter((note) => note.archived);

  const emptyNoteActive = activeNote.length === 0 && (
    <p className="notes-list__empty-message">Tidak Ada Catatan</p>
  );

  const emptyNoteArchive = archiveNote.length === 0 && (
    <p className="notes-list__empty-message">Tidak Ada Catatan Yang Di Arsifkan</p>
  );

  return (
    <div>
      <h2>Catatan Active</h2>
      {emptyNoteActive}
      <NoteList notes={activeNote} />
      <h2>Arsif</h2>
      {emptyNoteArchive}
      <NoteList notes={archiveNote} />
    </div>
  );
};

export default NoteLIstBody;
