import { Fragment } from "react";
import Layout from "./Components/Layout/Layout";
import MealsAvailable from "./Components/Meals/MealsAvailable";
import MealsSummary from "./Components/Meals/MealsSummary";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Fragment>
    <Cart/>
      <Layout/>
      <MealsSummary/>
      <MealsAvailable/>
    </Fragment>
  );
}

export default App;
