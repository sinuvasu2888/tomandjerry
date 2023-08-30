import React, { useContext } from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";

const Counter = (props) => {
  //Obtain CartContext
  const ctx = useContext(CartContext);

  //Add to cart quantity
  const addMealButtonHandler = () => {
    // ctx.addItem(props.meal);
    ctx.cartDispatch({ type: "ADD", meal: props.meal });
  };

  //Remove to cart quantity
  const subMealButtonHandler = () => {
    // ctx.removeItem(props.meal);
    ctx.cartDispatch({ type: "REMOVE", meal: props.meal });
  };

  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button onClick={subMealButtonHandler} className={classes.Sub}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.count}>{props.meal.amount}</span>
        </>
      ) : null}

      <button onClick={addMealButtonHandler} className={classes.Add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
