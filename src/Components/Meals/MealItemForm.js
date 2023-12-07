import { useContext, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../store/cart-context";

const MealsItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log("Reinitialized cartCtx", cartCtx);

  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuantity(value);
  };

  const addItemForm = (event) => {
    event.preventDefault();
    //  cartCtx.addItem(props.item);
    // const quantity=document.getElementById("amount"+props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
    console.log("After render:", cartCtx);
  };
  
  return (
    <form className={classes.form}>
      {/* {console.log("Inside render:", cartCtx.items)} */}
      <Input
        label="Amount"
        type="number"
        id="amount"
        min="1"
        max="5"
        defaultValue="1"
        onChange={handleInputChange}
      />
      <button onClick={addItemForm}>+ ADD</button>
    </form>
  );
};
export default MealsItemForm;
