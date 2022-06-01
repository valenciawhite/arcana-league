import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Navbar } from "./components/Navbar";
import { Readings } from "./components/Readings";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  // useEffect(() => {
  //   fetch('/me').then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setCurrentUser(user);
  //       })
  //     }
  //   })
  // },[])

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Switch>
          <Route path="/login" element={Login} setCurrentUser={setCurrentUser}><Login /></Route>
          <Route path="/signup" element={Signup} setCurrentUser={setCurrentUser}><Signup /></Route>
          <Route path="/readings" setCurrentUser={setCurrentUser}><Readings /></Route>
          <Route path="/" element={Home} setCurrentUser={setCurrentUser}><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;