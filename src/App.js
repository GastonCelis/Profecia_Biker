import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
