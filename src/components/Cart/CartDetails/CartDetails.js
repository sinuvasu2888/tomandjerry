import React, { useContext, useState } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = (props) => {
  const ctx = useContext(CartContext);

  const [showConfirm, setShowConfirm] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);

  const showConfirmHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };
  const okHandler = () => {
    // clear cart
    // ctx.clearCart();
    ctx.cartDispatch({ type: "CLEAR" });
  };

  // const closeHandler = () => {
  //   setIsOpen(false);
  // };

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          onCancel={cancelHandler}
          onOk={okHandler}
          confirmText={"Are you sure to clear out cart?"}
        />
      )}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <div className={classes.Clear} onClick={() => {}}>
            &nbsp;
            {/* <FontAwesomeIcon
              icon={faCircleXmark}
              size="lg"
              style={{ color: "gray" }}
            /> */}
          </div>
          <h2 className={classes.Title}>Order Details</h2>
          <div className={classes.Clear} onClick={showConfirmHandler}>
            <FontAwesomeIcon icon={faTrash} />
            <span>Empty Cart</span>
          </div>
        </header>

        <div className={classes.MealList}>
          {ctx.items.map((item) => (
            <Meal minImg noDesc key={item.id} meal={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
