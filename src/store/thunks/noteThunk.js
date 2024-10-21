import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApiNotes = createAsyncThunk("notes/ftech", async () => {
    const response = await axios.get("http://127.0.0.1:5002/notes");
    return response.data;
})

export const addApiNote = createAsyncThunk("notes/add", async (note) => {
    const response = await axios.post("http://127.0.0.1:5002/notes", note);
    return response.data;
})
export const deleteApiNote = createAsyncThunk("notes/delete", async (id) => {
    await axios.delete(`http://127.0.0.1:5002/notes/${id}`);
    return id;
})
export const archiveApiNote = createAsyncThunk("notes/archive", async (data) => {
    const response = await axios.put(`http://127.0.0.1:5002/notes/${data.id}`, data);
    return response.data;
})