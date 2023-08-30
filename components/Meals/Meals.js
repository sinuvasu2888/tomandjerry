import React from "react";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";

const Meals = (props) => {
  return (
    <div className={classes.Meals} data-testid="meals">
      {props.mealsData.map((item) => (
        <Meal key={item.id} meal={item} />
      ))}
    </div>
  );
};

export default Meals;
