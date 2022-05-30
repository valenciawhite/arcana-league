import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar(){
    return (
        <div>
            <div className='logo'>
                Arcana League 
            </div>
            <nav className='nav-item'>
                <ul className='nav-ul'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

};