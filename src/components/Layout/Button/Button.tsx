import React from "react";
import "./Button.css";

type ButtonProps = {
  onClick: Function;
  children: React.ReactNode;
  type?: string;
  name?: string;
};
function Button({ onClick, children, type, name }: ButtonProps) {
  return (
    <button
      aria-label={name}
      className={type === "icon" ? "button icon" : "button"}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
