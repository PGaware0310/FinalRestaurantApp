import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  // const [totalQuant, setTotalQuant] = useState(0);
  
  const addToCart = (item) => {
    updateItems([...items, item]);
    // items.push(item);
    // console.log("Inside addTOCart", items);
  };

  const removeToCart = (id) => {
    updateItems((items) => {
      const updatedItems = [...items];
      const itemIndex = updatedItems.findIndex((item) => item.id === id);
      // console.log("ItemIndex", itemIndex);
      // console.log("Index if same id", id);
      if (itemIndex !== -1) {
        if (updatedItems[itemIndex].quantity > 1) {
          updatedItems[itemIndex].quantity -= 1;
        } else {
          // If the quantity is already 1, remove the item from the cart
          updatedItems.splice(itemIndex, 1);
        }
      }
      return updatedItems;
    });
  };

  const plusItemsInCart = (id) => {
    updateItems((itm) => {
      const update = [...itm];
      const index = update.findIndex((item) => item.id === id);
      if (index !== -1) {
        if (update[index].quantity >= 1) {
          update[index].quantity += 1;
        }
      }
      return update;
    });
  };

  const clearItem = () => {
    updateItems([]);
  };

  const cartContext = {
    items: items,
    addItem: addToCart,
    removeItem: removeToCart,
    plusItems: plusItemsInCart,
    // totalQuantity: totalQuant,
    clearItem:clearItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log("Inside CardProvider", cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
