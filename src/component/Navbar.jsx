import React, { useContext } from 'react'
import NoteSearch from './NoteSearch'
import { useDispatch } from 'react-redux'
// import { NoteContext } from '../context/NoteAapp'

const Navbar = () => {
  const dispatch = useDispatch()
  // const { onSearchNotes } = useContext(NoteContext);
  return (
    <div className='note-app__header'>
        <h1>Notes</h1>
        <NoteSearch />
    </div>
  )
}

export default Navbar