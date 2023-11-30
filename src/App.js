import { Fragment, useState } from "react";
import Layout from "./Components/Layout/Layout";
import MealsAvailable from "./Components/Meals/MealsAvailable";
import MealsSummary from "./Components/Meals/MealsSummary";
import Cart from "./Components/Cart/Cart";

function App() {
  const [openCart,setOpenCart]=useState(false);

  const onShowCart=()=>{
    setOpenCart(true);
  }

  const onHideCart=()=>{
    setOpenCart(false);
  }
  return (
    <Fragment>
    {openCart && <Cart onHide={onHideCart}/> }
      <Layout showCart={onShowCart}/>
      <MealsSummary/>
      <MealsAvailable/>
    </Fragment>
  );
}

export default App;
