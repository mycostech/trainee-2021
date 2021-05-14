import React, { useEffect } from "react";
import { isConstructorDeclaration } from "typescript";
import useNoteApi from "../hooks/useNoteApi";
import Note from "../models/Note";
import Loading from "./Loading";
import NoteDetial from "./NoteDetail/NoteDetial";

interface NoteListProp {
    getNotes: any;
    loading:boolean
    notes: Note[]
}


function NoteList({
    getNotes,
    loading,
    notes,
    
}: NoteListProp) {

    useEffect(() => {
        getNotes()
    }, [getNotes])
    
    return (
        <div>
            {loading ? <Loading /> :
                notes.map(m => {
                    //console.log(m)
                    return <NoteDetial note={m} key={m.id} />
                })
            }
        </div>
    )
}

export default NoteList