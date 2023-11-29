import classes from './MealsSummary.module.css';
const MealsSummary = (props) => {
  return (
    <section className={classes.heading}>
      
        <h1>Delicious Flavors Delivered To You!!</h1>
     <p>
          Experience the future of dining with our online ordering platform,
          redefining convenience and choice.
        </p>
        <p>
          With a few clicks, savor the convenience of doorstep delivery while
          indulging in the finest flavors curated by our passionate chefs.
        </p>
        
    </section>
  );
};

export default MealsSummary;
