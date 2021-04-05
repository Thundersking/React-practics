import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Input } from 'reactstrap';

function Textarea({notes, saveItem, editId, changeItem, getValue, addItem}) {
    return (
        <>
            <Button className="btn-main" color="success" onClick={editId ? saveItem : addItem}>{editId ? 'Save' : 'Add'}</Button>
            <Input type='textarea' value={getValue('text')} onChange={event => changeItem('text', event)} />
        </>
    )
}

export default Textarea;