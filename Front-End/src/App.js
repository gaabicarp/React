import React from "react";
import Home from "./Home";
import Login from "./Login";
import CreateAcount from "./Singin";
import Cities from "./Cities";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/create" component={CreateAcount} />
        <Route path="/cities" component={Cities} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
