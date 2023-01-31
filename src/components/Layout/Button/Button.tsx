import React from "react";
import "./Button.css";

type ButtonProps = {
  onClick: Function;
  children: React.ReactNode;
  type?: string;
};
function Button({ onClick, children, type }: ButtonProps) {
  return (
    <button
      className={type === "icon" ? "button icon" : "button"}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
