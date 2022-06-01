import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Signup() {
    
    const [formData, setFormData] = useState({
        username:'',
        password:''
    });

    function handle(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        
        // const newData ={...formData}
        // newData[e.target.id] = e.target.value
        // setFormData(newData)
        // console.log(newData);
    }

    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
        
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(formData) 
        })
        .then(res => res.json())
        .then((res) => alert("Account created. Please log in :)"))
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