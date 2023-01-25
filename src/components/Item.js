import React from "react";
import { useState } from "react"

function Item({ name, category }) {

  const [incart, setCart] = useState(false)

  function setInCart() {
    setCart(!incart)
  }

  return (
    <li className={incart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={setInCart} className={incart ? "remove" : "add"}>{
        incart? "Remove From Cart" : "Add to Cart"
      }</button>
    </li>
  );
}

export default Item;
