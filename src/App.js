import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/cart">
          
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
