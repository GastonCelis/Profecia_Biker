import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar.js";
import CartWidget from "./components/CartWidget/CartWidget.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
