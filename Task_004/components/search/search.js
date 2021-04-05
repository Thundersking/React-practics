import React, { useState } from 'react';
import { Input } from 'reactstrap';

function Search({setValue}) {

    return (
        <div className="search-block">
            <Input placeholder="Search" onChange={event => setValue(event.target.value)} />
        </div>
    )
}

export default Search;
