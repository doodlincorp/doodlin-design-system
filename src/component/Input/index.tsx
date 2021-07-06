import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: {
    leading?: React.ReactElement;
    tailing?: React.ReactElement;
  };
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      inputSize = "md",
      disabled,
      spellCheck = "false",
      autoComplete = "off",
      icon,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("_INPUTWRAPPER_", className, inputSize, { disabled })}>
        {icon && <div className="leading_icon">{icon.leading}</div>}
        <input ref={ref} className={cn("_INPUT_", icon)} {...props} />
        {icon && icon.tailing}
      </div>
    );
  },
);

export default Input;
