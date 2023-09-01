import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    //apply filter after user inputs
    //apply search after one seccond of user inputs
    const timer = setTimeout(() => {
      console.log("effect triggers");
      props.onFilter(keyword);
    }, 1000);

    //call this before calling useEffect()
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const inputChangeHandler = (e) => {
    // props.onFilter(e.target.value);
    setKeyword(e.target.value);
  };

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          data-testid="search"
          value={keyword}
          onChange={inputChangeHandler}
          className={classes.SearchInput}
          type="text"
          placeholder={"Search Meal..."}
        />
        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
      </div>
    </div>
  );
};

export default FilterMeals;
