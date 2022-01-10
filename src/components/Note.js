import {BiTrash} from "react-icons/bi";

const Note = ({note, onDelete}) => {
    return (
      <div className='note'>  
        <p>{note.text}</p>
        <div><BiTrash className='trash-note' style={{ cursor:'pointer'}}
           onClick={() => onDelete(note.id)}/></div>
        
      </div>  
    )
}

export default Note
