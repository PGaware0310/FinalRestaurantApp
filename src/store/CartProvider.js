import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
const [items,updateItems]=useState([]);

  const addToCart = (item) => {
    updateItems([...items,item]);
    console.log("Inside addTOCart",cartContext);
  };

  const removeToCart = (id) => {};

const cartContext={
  items:items,
  addItem:addToCart,
  removeItem:removeToCart
}
  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
