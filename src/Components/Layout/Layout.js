import React from "react";
import foodImage from '../Images/meal.jpg';
import classes from './Layout.module.css';
import LayoutCartButton from "./LayoutCartButton";

const Layout=(props)=>{
return(
    <>
    <header className={classes.header}>
    <h1 >ReactMeals</h1>
    <LayoutCartButton onClick={props.showCart}/>
    </header>
    {/* <div > */}
        <img className={classes['img']} src={foodImage} alt="Delicious food"/>
    {/* </div> */}
    </>
);
};

export default Layout;