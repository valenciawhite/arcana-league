import { useEffect } from "react";
import { useHistory, Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";



const LoggedOut = () => {

    const navigate = useHistory();

  useEffect(() => {
    navigate.pus('/login')
}, [])

  return (
    <div>
    <Login />
      <Switch>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Switch>
    </div>
  );
};

export default LoggedOut;