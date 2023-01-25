
import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = theme ? "App dark" : "App light"

  function toggleTheme() {
    setTheme(!theme)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme} >{
          theme ? "Light Mode" : "Dark Mode"
        }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;