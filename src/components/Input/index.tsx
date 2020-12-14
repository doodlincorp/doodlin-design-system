import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import "./Input.scss";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<IInputProps> = ({ className, ...props }) => {
  return <input className={cn("_INPUT_", className)} {...props} />;
};

export default Input;
