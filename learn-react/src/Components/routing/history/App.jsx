import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "../../../apis/ContextApi";
import Form from "../../../forwardingRefs/Form";
import Movie from "../../../forwardingRefs/Movie";
import Grid from "../../../hooks/Grid";
import HooksExample from "../../../hooks/HooksExample";
import HooksExapmple2 from "../../../hooks/HooksExapmple2";
import User from "../../context/User";

import AuthMenu from "./AuthMenu";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/authmenu">Auth</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/useEffect">Use Effect</Link>
          </li>
          <li>
            <Link to="/useEffect2">Use Effect Example 2</Link>
          </li>
          <li>
            <Link to="/grid">Grid Example</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/authmenu" exact>
            <AuthMenu />
          </Route>
          <Route path="/user" exact>
            <User />
          </Route>
          <Route path="/form" exact>
            <Form />
          </Route>
          <Route path="/movie" exact>
            <Movie />
          </Route>
          <Route path="/useEffect" exact>
            <HooksExample />
          </Route>
          <Route path="/useEffect2" exact>
            <HooksExapmple2 />
          </Route>
          <Route path="/grid" exact>
            <Grid />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
