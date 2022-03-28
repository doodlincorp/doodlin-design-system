import React, { InputHTMLAttributes , useImperativeHandle, useRef, useState, useEffect } from "react";
import cn from "classnames";

import "./index.scss";
import Icon from "../Icon";
import { EColorMap } from "../../utils/colorMap";
import Text from "../Text";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  password?: boolean;
  inputSize?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: {
    leading?: React.ReactElement;
    tailing?: React.ReactElement;
  };
  error?: boolean;
  errorMessage?: string;
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
      error,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [revealPw, setRevealPw] = useState<boolean>(false);

    useImperativeHandle(ref, () => {
      return {
        focus: () => {
          if (inputRef.current) {inputRef.current.focus();}
        },
        get: () => {
          return inputRef.current?.value || "";
        },
        reset: () => {
          if (inputRef.current) {inputRef.current.value = "";}
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
      <div className={cn("_INPUTWRAPPER_", className, { error, errorMessage })}>
        <div
          className={cn("_wrapper", inputSize, {
            disabled,
          })}
          onClick={() => {
            if (inputRef.current) {inputRef.current.focus();}
          }}
        >
          {icon && icon.leading}
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
              className="_password-toggle-btn"
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
        {errorMessage && (
          <Text
            className="_error-message"
            size="x-small"
            textColor={EColorMap.red_8}
          >
            <Icon.InfoMark
              className="_icon"
              rotate={180}
              color={EColorMap.red_8}
            />
            {errorMessage}
          </Text>
        )}
      </div>
    );
  },
);

export default Input;
