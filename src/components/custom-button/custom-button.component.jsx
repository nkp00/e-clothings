import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, signInWithGoogle, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${
        signInWithGoogle ? "signInWithGoogle" : null
      } custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
