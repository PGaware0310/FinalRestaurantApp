import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addToCart = (item) => {
    updateItems([...items,item]);
    // items.push(item);
    // console.log("Inside addTOCart", items);
  };

  const removeToCart = (id) => {};

  const cartContext = {
    items: items,
    addItem: addToCart,
    removeItem: removeToCart,
    msg: "Click me",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log("Inside CardProvider", cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
