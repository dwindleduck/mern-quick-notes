export default function Note({note}) {
    
    const dateAndTime = new Date(note.createdAt)
    
    return (
        <li className="Note">
            <p>{note.text}</p>
            <p>{dateAndTime.toLocaleString()}</p>
        </li>
    )
}
