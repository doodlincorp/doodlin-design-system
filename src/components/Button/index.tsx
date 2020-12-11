import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
