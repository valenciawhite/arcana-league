import { useEffect, useState } from "react";
import uuid from 'react-uuid'
import { Main } from "./Notes/Main";
import { Sidebar } from "./Notes/Sidebar";

export function Readings(){
    const [entries, setEntries] = useState(
        localStorage.entries ? JSON.parse(localStorage.entries) : []
    );
    const [activeNote, setActiveNote] = useState(false)

    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries))
    },[entries])

    const handleAddEntry=() => {
        const newEntry = {
            id: uuid(),
            title: 'Untitled Note',
            body: '',
            lastModified: Date.now(),
        }
        setEntries([newEntry, ...entries])
    }
    
    const onUpdateNote = (updatedNote) => {
        const updateNotesArr = entries.map((entry) => {
            if (entry.id === activeNote) {
                return updatedNote;
            }

            return entry; 
        })

        setEntries(updateNotesArr)
        
    }

    const handleDelete = (id) => {
        setEntries(entries.filter((entry) => entry.id !== id))
    }

    const getActiveNote = () => {
        return entries.find((entry) => entry.id === activeNote)
    }

    return (
        <div className="readings-home">
            <Sidebar 
            entries={entries} 
            handleAddEntry={handleAddEntry} 
            handleDelete={handleDelete}
            activeNote={activeNote} 
            setActiveNote={setActiveNote}
            />
            <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
    )
}