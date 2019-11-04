import React from "react";
import Home from "./Home";
import Login from "./Login";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/singin" component={Singin} />
        <Route path="/cities" component={cities} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
