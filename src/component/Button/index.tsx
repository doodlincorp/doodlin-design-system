import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";
import { TDefaultSize } from "../..";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TDefaultSize;
  variant?: "ghost" | "solid" | "quiet" | "textonly";
  buttonType?: "basic" | "light" | "core" | "danger";
  fullWidth?: boolean;
  loading?: boolean;
  rounded?: boolean;
  icon?: { iconType?: React.ReactElement };
  label?: { labelText?: string };
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  size = "md",
  variant = "solid",
  disabled,
  fullWidth,
  loading,
  rounded,
  buttonType = "basic",
  icon,
  label,
  ...props
}) => {
  return (
    <button
      className={cn(`_BUTTON_`, className, size, variant, buttonType, icon, {
        loading,
        rounded,
        dis: disabled,
        "dis-ghost": variant === "ghost" && disabled,
        "dis-quiet": variant === "quiet" && disabled,
        fw: fullWidth,
        iconOnly: !label,
      })}
      {...props}
    >
      <span
        className={cn({
          none: loading,
        })}
      >
        {icon && <div className="_BUTTON_icon">{icon.iconType}</div>}
        {label?.labelText}
        {children}
      </span>
    </button>
  );
};

export default Button;
