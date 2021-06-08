import React, { ButtonHTMLAttributes, useRef } from "react";
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
  label?: {
    labelIcon?: React.ReactElement;
    labelText?: string;
  };
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      size = "md",
      variant = "solid",
      disabled,
      fullWidth,
      loading,
      rounded,
      buttonType = "basic",
      label,
      ...restProps
    } = props;
    return (
      <button
        className={cn(`_BUTTON_`, className, size, variant, buttonType, {
          loading,
          rounded,
          disabled,
          fullWidth,
          iconOnly: label && !label.labelText,
        })}
        ref={ref}
        {...restProps}
      >
        <span
          className={cn({
            none: loading,
          })}
        >
          {label ? (
            <>
              {label.labelIcon && (
                <div className="_BUTTON_icon">{label.labelIcon}</div>
              )}
              {label.labelText}
            </>
          ) : (
            children
          )}
        </span>
      </button>
    );
  }
);

export default Button;
