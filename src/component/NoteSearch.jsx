import { useDispatch } from "react-redux";
import {setKeyword} from "../store/slices/noteSlice"

const NoteSearch = () => {
  
  const dispatch = useDispatch()

  const handleSerach = (e) => {
    const keyword = e.target.value;
    dispatch(setKeyword(keyword))
  }

  return (
    <div className='note-search'>
        <input onChange={handleSerach} type="text" placeholder='Cari...'/>
    </div>
  )
}

export default NoteSearch