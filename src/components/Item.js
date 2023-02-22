import React, {useState} from "react";


function Item({ name, category }) {

const [item, setItem] = useState(false)

function handleClick() {
  setItem((item) => !item)
} 



  return (
    <li className={item ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={item ? "remove" : "add" }>{item ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
