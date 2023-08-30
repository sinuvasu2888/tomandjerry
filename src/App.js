import React, { useReducer, useState } from "react";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart-context";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";
import { mealsStockData } from "./asset/data";
import Header from "./Header";

//define a cartReducer
const cartReducer = (state, action) => {
  //copy the cart
  const newCart = { ...state };
  switch (action.type) {
    //add item to cart
    case "ADD":
      //check if meal existing in the cart
      if (newCart.items.indexOf(action.meal) === -1) {
        //add meal to cart
        newCart.items.push(action.meal);
        //update counts
        action.meal.amount = 1;
      } else {
        //add new
        action.meal.amount += 1;
      }

      //add total counts
      newCart.totalAmount += 1;
      //total price
      newCart.totalPrice += action.meal.price;

      return newCart;
    //deduct
    case "REMOVE":
      //reduce meal to cart
      action.meal.amount -= 1;
      //check if cart item is 0
      if (action.meal.amount === 0) {
        //remove selected meal(s) from the cart
        //splice() method is used to change the contents of the newCart.items array
        newCart.items.splice(newCart.items.indexOf(action.meal), 1);
      }

      //update cart amount and price
      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.meal.price;
      return newCart;
    //clear cart
    case "CLEAR":
      // set to 0
      newCart.items.forEach((item) => delete item.amount);
      newCart.items = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;
    default:
      return state;
  }
};

const App = () => {
  //reducer
  const [cartData, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  //initial load all meals
  const [mealsData, setMealsData] = useState(mealsStockData);
  // console.log(setMealsData);

  //filter meals (not case sensitive)
  const filterHandler = (keyword) => {
    const newMealsData = mealsStockData.filter(
      (item) => item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    );
    setMealsData(newMealsData);
  };

  return (
    <div>
      <Header />
      <CartContext.Provider value={{ ...cartData, cartDispatch }}>
        {/* <Header /> */}
        <FilterMeals onFilter={filterHandler} />
        <Meals mealsData={mealsData} />
        <Cart />
      </CartContext.Provider>
    </div>
  );
};

export default App;
