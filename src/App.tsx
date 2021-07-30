import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Home from "./components/Home";
import firebase from "./firebase/config";
function App() {
  const [user, setUser] = useState<firebase.User | null>();

  const isUserLogedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    isUserLogedIn();
  }, []);

  return (
    <Router>
      <NavBar user={user} />
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/login">
          <Login user={user} />
        </Route>
        <Route exact path="/signup">
          <Signup user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
