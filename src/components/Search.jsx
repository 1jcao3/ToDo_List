import "../Styles/Inputs.css"
import React from 'react'
import { ToDoContext } from "./ToDoContext/ToDoContext";


export default function Search(){

    const {searchValue, setsearchValue} = React.useContext(ToDoContext);

    return (
        <>
<div className="search-c">

            <input 
                type="text" 
                placeholder="search" 
                id="search" 
                value={searchValue} 
                onChange={(event) => setsearchValue(event.target.value)} 
            />
            
            </div>
        </>
    );
}
