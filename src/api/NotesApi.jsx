import axios from "axios";

export const fetchApiNotes = async () => {
    const response = await axios.get("http://127.0.0.1:5000/notes");
    return response
}

export const createApiNote = async (note) => {
    const response = await axios.post("http://127.0.0.1:5000/notes", note);
    return response;
}

export const deleteAPiNote = async (id) => {
    const response = await axios.delete(`http://127.0.0.1:5000/notes/${id}`);
    return response
}

export const archiveApiNote = async (id, data) => {
    const response = await axios.put(`http://127.0.0.1:5000/notes/${id}`, data);
    return response
}


