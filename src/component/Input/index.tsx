import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "xxs" | "sm" | "md" | "lg" | "xxxl";
  borderType?: "border" | "underline" | "none";
}

export const Input: React.FC<IInputProps> = ({
  className,
  inputSize = "md",
  borderType = "border",
  disabled,
  spellCheck = "false",
  ...props
}) => {
  return (
    <input
      className={cn("_INPUT_", className, inputSize, borderType, {
        dis: disabled,
        "dis-underline": borderType === "underline" && disabled,
        "dis-none": borderType === "none" && disabled,
      })}
      {...props}
    />
  );
};

export default Input;
