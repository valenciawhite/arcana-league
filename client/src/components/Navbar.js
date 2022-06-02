import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar({currentUser, setCurrentUser}){

    function handleLogout(){
        fetch('/logout', {method: "DELETE"})
        .then(res => {
          if (res.ok){
            setCurrentUser(null)
          }
        })
      }


    return (
        <div className='navDiv'>
            <div className='logo'>
                Arcana League 
            </div>
            <nav className='nav-item'>
                <ul className='nav-ul'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/readings'>Readings</Link>
                    </li>
                    </ul>
                        <button onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )

};