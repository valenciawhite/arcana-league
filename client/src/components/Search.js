import React from 'react'


export function Search({handleSearch}){
    return (
        <div className='search'>
            <input  
            onChange={(e) => 
            handleSearch(e.target.value)
            }
            type='text' placeholder='type to search'>
            </input>
        </div>
    )

};