import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div>
      <img className={classes.Img} src="/img/logo/tomjerry.png" alt="" />
    </div>
  );
}

export default Header;
