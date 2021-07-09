import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";
import { useImperativeHandle, useRef, useState, useEffect } from "react";
import Icon from "../Icon";
import { EColorMap } from "../../utils/colorMap";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  password?: boolean;
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
  rawRef: () => React.RefObject<HTMLInputElement>;
}

export const Input = React.forwardRef<IInputRef, IInputProps>(
  (
    {
      className,
      inputSize = "md",
      password,
      disabled,
      spellCheck = "false",
      autoComplete = "off",
      icon,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [revealPw, setRevealPw] = useState<boolean>(false);

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
        rawRef: () => {
          return inputRef;
        },
      };
    });

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(
          inputRef.current.value.length,
          inputRef.current.value.length,
        );
      }
    }, [revealPw]);

    return (
      <div
        className={cn("_INPUTWRAPPER_", className, inputSize, { disabled })}
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        {icon && <div className="leading_icon">{icon.leading}</div>}
        <input
          ref={inputRef}
          className={cn("_INPUT_", icon, { tailing: password })}
          type={password ? (revealPw ? props.type : "password") : props.type}
          spellCheck={spellCheck}
          autoComplete={autoComplete}
          {...props}
        />
        {password && (
          <button
            className="password-toggle-btn"
            onClick={() => {
              setRevealPw(!revealPw);
            }}
          >
            <Icon.Vision
              variant={revealPw ? "vision" : "invision"}
              color={EColorMap.gray_6}
            />
          </button>
        )}
        {icon && icon.tailing}
      </div>
    );
  },
);

export default Input;
