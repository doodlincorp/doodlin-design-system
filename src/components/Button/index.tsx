import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import "./Button.scss";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "min" | "big";
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  size,
  ...props
}) => {
  return (
    <button className={cn(`_BUTTON_`, className, size)} {...props}>
      {children}
    </button>
  );
};

export default Button;
