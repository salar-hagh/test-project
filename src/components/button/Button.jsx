import React from "react";
import { SButton } from "./Button.style";

const Button = ({ background, children, onClick, color, width }) => {
  return (
    <SButton
      onClick={onClick}
      style={{ backgroundColor: background, width: width }}
    >
      <span style={{ color: color }}>{children} </span>
    </SButton>
  );
};

export default Button;
