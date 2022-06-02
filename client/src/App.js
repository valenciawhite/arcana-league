import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Navbar } from "./components/Navbar";
import { Readings } from "./components/Readings";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/users`).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(currentUser);
          setLoggedIn(true)
        });
      }
    })
  },[])

 
  function logout(){
    setCurrentUser({});
    setLoggedIn(false)
    localStorage.token = '';
  }

  return (
    <div className="arcana-app">
      <BrowserRouter>
      {currentUser ? <LoggedIn /> : <LoggedOut />}
      </BrowserRouter>
    </div>
   
  );
}

export default App;

