import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function Login({ setCurrentUser }) {
    let navigate = useHistory();
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    
    const [formData, setFormData] = useState({
        username:'',
        password:''
    });

    function handle(e){
        const newData ={...formData}
        newData[e.target.id] = e.target.value
        setFormData(newData)
        console.log(newData);
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(formData),
        }) 
        .then(res => res.json())
        .then(user => {setCurrentUser(user)
            navigate('/profile')})   
  }

//   function handleSubmit(e){
//     e.preventDefault();
//     const user = {
//         username: username,
//         password
//     }
//     fetch('/login', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user}) 
//    })
//    .then(res=> res.json())
//    .then((user) => {setCurrentUser(user)
//      navigate('/profile')})
// }

//   function handleLogout(){
//     fetch('/logout', {method: "DELETE"})
//     .then(res => {
//       if (res.ok){
//         setCurrentUser(null)
//       }
//     })
//   }

    return (
        <div className='login'>
                <form onSubmit={handleSubmit}>
                     <h2 id='loginSubtitle'>Log into your account</h2>
                     <label>
                         Username:
                         <input 
                         id='username'
                         type='username' 
                         value={formData.username} 
                         onChange={(e) => handle(e)} 
                        />
                     </label>
                     <label>
                         Password:
                         <input 
                         id='password'
                         type='password' 
                         value={formData.password} 
                         onChange={(e) => handle(e)} 
                         />
                     </label>
            
                     <button className='logButton'>Sign In</button>
                </form>
            <div>
                <h4>Don't have an account?</h4>
                    <Link to="/signup">
                        <button className='signButton'type="button">Sign Up</button>
                    </Link>
            </div>
        </div>
        
    )
    }

export default Login; 