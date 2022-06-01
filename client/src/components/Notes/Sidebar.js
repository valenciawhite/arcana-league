export function Sidebar({entries, handleAddEntry, handleDelete, setActiveNote, activeNote}){
    const sortedNotes = entries.sort((a,b) => b.lastModified - a.lastModified)
    
    return(
        <div className="app-sidebar">
            <div className='app-sidebar-header' >
                <h1>Tarot Readings</h1>
                <button onClick={handleAddEntry}>Add</button>
            </div>
            <div className="app-sidebar-entries">

            {sortedNotes.map(entry => (
                <div className={`app-sidebar-entry ${entry.id === activeNote && "active"}`} onClick={() => setActiveNote(entry.id)} key={entry.id}>
                    <div className='sidebar-note-title'>
                        <strong>{entry.title}</strong>
                        <button onClick={() => handleDelete(entry.id)}>Delete</button>
                    </div>
                    <p>{entry.body && entry.body.substring(0,100) + "..."}</p>

                    <small className="note-meta">
                        Last modified {new Date(entry.lastModified).toLocaleDateString("en-US", {})}
                    </small>
                </div>

            ))}
            </div>
        </div>
    )

}