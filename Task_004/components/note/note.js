import React, { useState } from 'react';
import { Button } from 'reactstrap';

function Note({notes, setEditId, remItem}) {

    const result = notes.map((note) => {
        
        return <div className="block-items" key={note.id}>
                    <p className="note-desc" onClick={() => setEditId(note.id)}>{note.text}</p>
                    <Button color="success" onClick={() => remItem(note.id)}>Delete</Button>
                </div>
    });

    return (
        <div className="block-notes">
            {result}
        </div>
    )
}

export default Note;