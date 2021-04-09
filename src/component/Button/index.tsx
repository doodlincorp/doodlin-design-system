import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";
//import { TDefaultSize } from "../..";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "ghost" | "solid" | "quiet";
  buttonType?: "basic" | "light" | "core" | "danger";
  fullWidth?: boolean;
  loading?: "spin";
  rounded?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  size = "xs",
  variant = "solid",
  disabled,
  fullWidth,
  loading,
  rounded,
  buttonType = "basic",
  ...props
}) => {
  return (
    <button
      className={cn(`_BUTTON_`, className, size, variant, loading, buttonType, {
        spin: loading,
        dis: disabled,
        round: rounded,
        "dis-ghost": variant === "ghost" && disabled,
        "dis-quiet": variant === "quiet" && disabled,
        fw: fullWidth,
      })}
      {...props}
    >
      <span
        className={cn({
          none: loading,
        })}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
