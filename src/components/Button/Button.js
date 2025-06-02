
import React from "react";
import styles from "./Button.module.scss";

//component Button, par children="Přidej do košíku", prop=onClick

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
