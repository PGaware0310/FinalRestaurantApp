import { useState } from "react";
import Layout from "./Components/Layout/Layout";
import MealsAvailable from "./Components/Meals/MealsAvailable";
import MealsSummary from "./Components/Meals/MealsSummary";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [openCart,setOpenCart]=useState(false);

  const onShowCart=()=>{
    setOpenCart(true);
  }

  const onHideCart=()=>{
    setOpenCart(false);
  }

  return (
    <CartProvider>
    {openCart && <Cart onHide={onHideCart}/> }
      <Layout showCart={onShowCart}/>
      <MealsSummary/>
      <MealsAvailable/>
    </CartProvider>
  );
}

export default App;
