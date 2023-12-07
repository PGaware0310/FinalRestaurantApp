import classes from './MealsItem.module.css';
import MealsItemForm from './MealItemForm';
const MealsItem=props=>{
    // console.log(props);
    const price=`$${props.price.toFixed(2)}`;
return(
    <li className={classes.meal}>
        <div>
        {/* {console.log(props)} */}
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <MealsItemForm id={props.id} item={props}/> 
        </div>
    </li>
);
};

export default MealsItem;