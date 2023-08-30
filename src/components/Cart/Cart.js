import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const Cart = (props) => {
  // console.log("re-render");
  const ctx = useContext(CartContext);

  //Add a state to set whether the details are displayed
  const [showDetails, setShowDetails] = useState(false);

  //Add a state to set whether the checkout page is displayed
  const [showCheckout, setShowCheckout] = useState(false);

  //infinite loop if false
  // if (ctx.totalAmount === 0) {
  //   setShowDetails(false);
  //

  //useEffect will only be called when ctx changes
  useEffect(() => {
    console.log("effect excution");
    if (ctx.totalAmount === 0) {
      //clear out cart
      setShowDetails(false);
      //clear out checkout
      setShowCheckout(false);
    }
  }, [ctx]);

  //function to display the details page
  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((prevState) => !prevState);
    // e.stopPropagation();
  };

  //function to display the checkout page
  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
    // e.stopPropagation();
  };

  //function to hide the checkout page
  const hideCheckoutHandler = () => {
    setShowCheckout(false);
    // e.stopPropagation();
  };

  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
      {/* details of the shopping cart */}
      {showDetails && <CartDetails />}
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalAmount === 0 ? (
        <p className={classes.NoMeal}>No meal selected</p>
      ) : (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      )}
      <button
        onClick={showCheckoutHandler}
        className={`${classes.Button} ${
          ctx.totalAmount === 0 ? classes.Disabled : ""
        }`}
      >
        Checkout
      </button>{" "}
    </div>
  );
};

export default Cart;
