import React  from 'react';
import './SearchBox.style.css';

function SearchBox({placeholder,handleChange}){
    return(
        <div className="search-box">
            <input className="search" type="search" placeholder={placeholder} onChange={handleChange}></input>
        </div>
    )
}

export default SearchBox;