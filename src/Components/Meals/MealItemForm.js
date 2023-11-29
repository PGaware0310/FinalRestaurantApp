import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
const MealsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        type="number"
        id="amount"
        min="1"
        defaultValue="1"
      />
      <button>+ ADD</button>
    </form>
  );
};
export default MealsItemForm;
