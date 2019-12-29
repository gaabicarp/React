import React from "react";
import Home from "./Home";
import Login from "./Login";
import CreateAcount from "./Singin";
import Cities from "./Cities";
import "./App.css";
import Itinerary from "./Itinerary";
import Favorites from "./Componentes/favorites"
import jwt from 'jsonwebtoken';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const isAuthenticated = () =>{
  const token = localStorage.getItem('jwtToken')
  let isValid = true
  try{
    isValid = jwt.decode(token);
  }catch(e){
    return false;
  }
  return isValid
};

const MyRoute = (props) => (
  isAuthenticated()
    ?<Route{...props} />
    :<Redirect to="/login"/>
)

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MyRoute exact path="/itineraries/:id" component={Itinerary} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/create" component={CreateAcount} />
        <MyRoute path="/favorites" component={Favorites} />
        <MyRoute path="/cities" component={Cities} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
