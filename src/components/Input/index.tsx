import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import "./Input.scss";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  changeValue: (value: string | boolean | number) => void;
  checkEvent?: (e: React.ChangeEvent<HTMLInputElement>) => boolean;
}

export const Input: React.FC<IInputProps> = ({
  changeValue,
  checkEvent,
  className,
  ...props
}) => {
  return (
    <input
      className={cn("_INPUT_", className)}
      onChange={(e) => {
        if (!checkEvent || checkEvent(e)) changeValue(e.currentTarget.value);
      }}
      {...props}
    />
  );
};

export default Input;
