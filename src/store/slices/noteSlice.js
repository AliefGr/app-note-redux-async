import { createSlice } from "@reduxjs/toolkit";
// import { fetchApiNotes, addApiNote, deleteApiNote, archiveApiNote } from "../../thunks/noteThunk";
import { fetchApiNotes, addApiNote, deleteApiNote, archiveApiNote } from "../thunks/noteThunk";

const noteSlice = createSlice({
    name : "note",
    initialState : {
        data : [],
        keyword : ""
    },

    reducers: {
        setKeyword : (state, action) => {
            state.keyword = action.payload
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchApiNotes.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(addApiNote.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(deleteApiNote.fulfilled, (state, action) => {
                state.data = state.data.filter((note) => note.id !== action.payload)
            })
            .addCase(archiveApiNote.fulfilled, (state,action) => {
                state.data = state.data.map(note => {
                    if(note.id === action.payload.id) {
                        return {...note, ...action.payload}
                    }
                    return note
                })
            })
            .addCase(fetchApiNotes.pending, (state, action) => {
                console.log('fetch/todo pending');
            })
            .addCase(fetchApiNotes.rejected, (state, action) => {
                // state.data = "Rejected";
                // state.data = action.payload;
                console.log('fetch/todo rejected');
            })
    }



})
export const { setKeyword } = noteSlice.actions;
export const noteReducer = noteSlice.reducer