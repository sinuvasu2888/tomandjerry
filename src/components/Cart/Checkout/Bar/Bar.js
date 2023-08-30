import React, { useContext } from "react";
import classes from "./Bar.module.css";
import CartContext from "../../../../store/cart-context";

const Bar = (props) => {
  const ctx = useContext(CartContext);

  const okHandler = () => {
    alert("Thanks for ordering with us");
    ctx.cartDispatch({ type: "CLEAR" });
  };

  return (
    <div className={classes.Bar}>
      <div className={classes.TotalPrice}>{props.totalPrice}</div>
      {/* no real function here to submit order, just return to homepage */}
      <button onClick={okHandler} className={classes.Button}>
        Place your order
      </button>
    </div>
  );
};

export default Bar;
