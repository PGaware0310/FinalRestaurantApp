import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCnt = useContext(CartContext);
  const cartItems = (
    <ul>
      {cartCnt.items.map((item) => (
        <li className={classes.cart} key={item.id}>
          <div className={classes.name}>{item.name}</div>
          <div className={classes.style}>
          <span className={classes.price}>${item.price}</span>
          <span>x{item.quantity}</span>
          <button className={classes["span-button"]}>-</button>
          <button className={classes["span-button"]}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  const totalAmount = cartCnt.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <Modal>
      {cartItems}
      {console.log("Inside Cart",cartCnt.items)}
      <div className={classes.amount}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.button}>
        <button onClick={props.onHide}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
