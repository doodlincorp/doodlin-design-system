import React, { ButtonHTMLAttributes, useRef } from "react";
import cn from "classnames";
import "./index.scss";
import { TButtonSize } from "../..";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TButtonSize;
  variant?: "ghost" | "solid" | "quiet" | "minimal";
  buttonColor?: "black" | "gray" | "blue" | "red";
  fullWidth?: boolean;
  loading?: boolean;
  rounded?: boolean;
  label?: {
    labelLeadingIcon?: React.ReactElement;
    labelTailingIcon?: React.ReactElement;
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
      buttonColor = "black",
      label,
      ...restProps
    } = props;
    return (
      <button
        className={cn(`_BUTTON_`, className, size, variant, buttonColor, {
          loading,
          rounded,
          disabled,
          fullWidth,
          iconOnly: label && !label.labelText,
        })}
        ref={ref}
        disabled={disabled}
        {...restProps}
      >
        <span
          className={cn({
            none: loading,
          })}
        >
          {label ? (
            <>
              {label.labelLeadingIcon && (
                <div className="_BUTTON_leading-icon">
                  {label.labelLeadingIcon}
                </div>
              )}
              {label.labelText}
              {label.labelTailingIcon && (
                <div className="_BUTTON_tailing-icon">
                  {label.labelTailingIcon}
                </div>
              )}
            </>
          ) : (
            children
          )}
        </span>
      </button>
    );
  },
);

export default Button;
