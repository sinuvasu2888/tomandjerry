import { createContext } from "react";

const CartContext = createContext({
  item: [],
  totalAmount: 0,
  totalPrice: 0,
  cartDispatch: () => {},
});

export default CartContext;
