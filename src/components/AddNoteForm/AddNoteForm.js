import {useState} from "react"
import {createNote} from "../../utilities/users-service"

export default function AddNoteForm({user, myNotes, setMyNotes}) {
    
    const [formData, setFormData] = useState({
        text: "",
        user: user
    })

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    async function handleSubmit(event) {
        event.preventDefault()

        const newNote = await createNote(formData)

        //console.log("Inside handleSubmit: " + newNote)
        setMyNotes([...myNotes, newNote])
    }
    
    
    return (
        <div className="AddNoteForm">
            <form>
                <input type="text" name="text" value={formData.text} onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}