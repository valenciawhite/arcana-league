import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Signup({setCurrentUser, currentUser}) {
    
    const [formData, setFormData] = useState({
        username:'',
        password:''
    });

    function handle(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
        
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(formData) 
        })
        .then(res => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                })
            } else{
                res.json().then((errors) => {
                    console.error(errors)
                })
            }
        })
       }
       
    return (
        <div className='signup-div'>
                <form onSubmit={handleSubmit}>
                     <h2 id='loginSubtitle'>Sign Up</h2>
                     <label>
                         Username:
                         <input id='username' name='username' type='text' value={formData.username} onChange={(e) => handle(e)} />
                     </label>
                     <label>
                         Password:
                         <input id='password' name='password' type='password' value={formData.password} onChange={(e) => handle(e)} />
                     </label>
            
                     <button className='subButton'>Submit</button>
                </form>
            <div>
                <h4>Already have an account?</h4>
                    <Link to="/login">
                        <button className='logButton'type="button">Login</button>
                    </Link>
            </div>
        </div>
    )
}

export default Signup; 