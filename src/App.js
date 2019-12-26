import React from "react";
import "./App.css";
import Users from "./components/users";
import Posts from "./components/posts";
import Details from "./components/details";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/users" render={() => <Users />} />
        <Route exact path="/posts/:id" render={props => <Posts {...props} />} />
        <Route
          exact
          path="/details/:id"
          render={props => <Details {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
