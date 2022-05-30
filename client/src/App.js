import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/profile"><Profile /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;