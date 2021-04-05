import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { nanoid } from 'nanoid';

import Note from "../note/note";
import Textarea from "../textarea/textarea";
import Search from "../search/search";


const initNotes = [
    {id: nanoid(), text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', edit: true},
    {id: nanoid(), text: 'Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..', edit: false}
]

function App() {
    const [notes, setNotes] = useState(initNotes);
    const [editId, setEditId] = useState(null);
    const [obj, setObj] = useState(getInitObj());
    const [value, setValue] = useState('');

    function getInitObj() {
        return {
            id: nanoid(),
            text: '',
            edit: false
        }
    }

    function addItem() {
        if (obj.text.length > 0) {
            setNotes([...notes, obj]);
            setObj(getInitObj());
        } else {
            alert('Заполните заметку!')
        }
    }

    function remItem(id) {
        setNotes(notes.filter(note => note.id !== id));
    }

    function getValue(prop) {
        if(editId) {
            return notes.reduce((res, note) => note.id === editId ? note[prop] : res, '');
        } else {
            return obj[prop];
        }
    }

    function changeItem(prop, event) {
        if (editId) {
            setNotes(notes.map(note => 
                note.id === editId ? {...note, [prop]: event.target.value} : note
            ));
        } else {
            setObj({...obj, [prop]: event.target.value});
        }
    }

    function saveItem() {
        if(editId) {
            setEditId(null);
        } else {
            setNotes([...notes, obj]);
            setObj(getInitObj());
        }
    }

    const filteredNotes = notes.filter(note => {
        return note.text.toLowerCase().includes(value.toLowerCase())
    });

    return (
        <div className="main-block">
            <div className="main-body col-xl-3 col-sm-6">
                <Search notes={notes} setNotes={setNotes} setValue={setValue} />
                <Note notes={filteredNotes} setEditId={setEditId} remItem={remItem} />
            </div>
            <div className="main-note col-xl-9 col-sm-6">
                <Textarea notes={notes} remItem={remItem} saveItem={saveItem} editId={editId} getValue={getValue} changeItem={changeItem} addItem={addItem}  />
            </div>
        </div>
    )
}



export default App;