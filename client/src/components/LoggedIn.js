import Home from "./Home";
import { Readings } from "./Readings";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { Navbar } from "./Navbar";


const LoggedIn = ({currentUser, setCurrentUser}) => {
  return (
       <BrowserRouter>
        <div className="App">
            <Navbar currentUser={currentUser}  setCurrentUser={setCurrentUser} />
            <Switch>
                <Route path="/readings" >
                    <Readings />
                </Route>
                <Route path="/" >
                    <Home />
                </Route>
            </Switch>
        </div>
    </BrowserRouter> 
  );
};

export default LoggedIn;