import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "xxs" | "sm" | "md" | "lg" | "xxxl";
  borderType?: "border" | "underline" | "none";
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      inputSize = "md",
      borderType = "border",
      disabled,
      spellCheck = "false",
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={cn("_INPUT_", className, inputSize, borderType, {
          disabled,
        })}
        {...props}
      />
    );
  }
);

export default Input;
