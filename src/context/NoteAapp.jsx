import { createContext, useState } from "react";
import {
    fetchApiNotes,
    createApiNote,
    deleteAPiNote,
    archiveApiNote,
  } from "../api/NotesApi";

const NoteContext = createContext();

function Provider({ children }) {

  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");

  const fetchApi = async () => {
    const res = await fetchApiNotes();
    setNotes(res.data);
  };
  // Serach Notes
  const onSearchNotes = (keyword) => {
    setKeyword(keyword);
  };

  const onCreateNote = async (note) => {
    const newNote = { ...note, archived: false, createdAt: new Date() };
    const res = await createApiNote(newNote);
    setNotes([...notes, res.data]);
    console.log("Berhasil Menambhakan Catatn");
  };

  // OnDelete
  const OnDeleteNote = async (id) => {
    await deleteAPiNote(id);
    const upDatedNotes = notes.filter((note) => note.id !== id);
    setNotes(upDatedNotes);
  };

  // One Archive Note
  const OnArchiveNote = async (data) => {
    const editNote = { ...data, archived: !data.archived };
    const res = await archiveApiNote(data.id, editNote);
    const upadtedUrchive = notes.map((note) => {
      if (note.id === data.id) {
        return { ...note, ...res.data };
      }
      return note;
    });
    setNotes(upadtedUrchive);
  };

  const valueToShare = {
    fetchApi,
    notes,
    keyword,
    onSearchNotes,
    onCreateNote,
    OnDeleteNote,
    OnArchiveNote,
  };

  return(
    <NoteContext.Provider value={valueToShare}>
        {children}
    </NoteContext.Provider>
  )
}

export { Provider, NoteContext };
