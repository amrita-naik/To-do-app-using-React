import { useState } from 'react'

const AddNotes = ({ onAdd }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a note')
            return
        }
        onAdd({ text})

        setText('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <textarea className='notes' type='text' placeholder='Write your notes here..' value={text}
                    onChange={(e) => setText(e.target.value)} />      
            </div>
            
            <input type='submit' value='Save Note' className='btn btn-block'></input>
        </form>
    )
}

export default AddNotes