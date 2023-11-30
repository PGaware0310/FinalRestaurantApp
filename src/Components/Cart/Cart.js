import Modal from "../UI/Modal";
import classes from './Cart.module.css';
const Cart = (props) => {
  const cartItems = (
  <ul >
    {[{id:'c1',name:'Sushi',amount:2,price:12.99}].map((item)=>(
        <li className={classes.cart}>{item.name}</li>
    ))}
  </ul>);
  return (
    <Modal>
    {cartItems}
      <div className={classes.amount}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.button}>
        <button>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
