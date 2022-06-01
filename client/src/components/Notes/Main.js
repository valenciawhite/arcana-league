export function Main({activeNote, onUpdateNote}){
    const onEdit = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now("en-us, {}")
        })
    }
    if(!activeNote) return <div className="no-active-note">No note selected</div>

    return(
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type='text' id='title' value={activeNote.title}  
                onChange={(e) => onEdit('title', e.target.value )} autoFocus></input>
                <textarea id='body' value={activeNote.body} 
                onChange={(e) => onEdit('body', e.target.value )}
                placeholder="Write your entry here..."></textarea>

            </div>
            {/* <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <div className="markdown-preview">{activeNote.body}</div>
            </div> */}
        </div>
    )

}