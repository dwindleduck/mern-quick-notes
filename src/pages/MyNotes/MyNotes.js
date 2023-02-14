import AddNoteForm from "../../components/AddNoteForm/AddNoteForm"       
import Note from "../../components/Note/Note";

export default function MyNotes({user, myNotes, setMyNotes}) {
    
    let listOfNotes

    if (myNotes.length === 0) {
        listOfNotes = "No Notes Yet!"
    } else {
        listOfNotes = myNotes.map((note, index) => <Note note={note} key={index}/>)
    }
    
    return (
        <div className="MyNotes">
            <AddNoteForm user={user} myNotes={myNotes} setMyNotes={setMyNotes}/>
            <ul>
                {listOfNotes}
            </ul>
        </div>
    )
}