import Layout from "./Components/Layout/Layout";
import MealsAvailable from "./Components/Meals/MealsAvailable";
import MealsSummary from "./Components/Meals/MealsSummary";

function App() {
  return (
    <div>
      <Layout/>
      <MealsSummary/>
      <MealsAvailable/>
    </div>
  );
}

export default App;
