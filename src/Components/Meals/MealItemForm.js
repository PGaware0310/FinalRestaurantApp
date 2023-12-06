import { useContext, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../store/cart-context";

const MealsItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuantity(value);
  };
  console.log("Reinitialized cartCtx", cartCtx);

  const addItemForm = (event) => {
    event.preventDefault();
    //  cartCtx.items.push(props.item);
    // const quantity=document.getElementById("amount"+props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
    console.log("After render:", cartCtx.items);
  };
  
  return (
    <form className={classes.form}>
      {console.log("Inside render:", cartCtx)}
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
