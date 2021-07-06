import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";
import { useImperativeHandle, useRef } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: {
    leading?: React.ReactElement;
    tailing?: React.ReactElement;
  };
}

export interface IInputRef {
  focus: () => void;
  get: () => string;
  reset: () => void;
}

export const Input = React.forwardRef<IInputRef | undefined, IInputProps>(
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
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
      return {
        focus: () => {
          if (inputRef.current) inputRef.current.focus();
        },
        get: () => {
          return inputRef.current?.value || "";
        },
        reset: () => {
          if (inputRef.current) inputRef.current.value = "";
        },
      };
    });

    return (
      <div
        className={cn("_INPUTWRAPPER_", className, inputSize, { disabled })}
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        {icon && <div className="leading_icon">{icon.leading}</div>}
        <input ref={inputRef} className={cn("_INPUT_", icon)} {...props} />
        {icon && icon.tailing}
      </div>
    );
  },
);

export default Input;
