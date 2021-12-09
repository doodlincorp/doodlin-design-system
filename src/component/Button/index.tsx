import React, { ButtonHTMLAttributes, useRef } from "react";
import cn from "classnames";
import "./index.scss";
import { EColorMap, TButtonSize } from "../..";
import styled from "@emotion/styled";

export interface IColorOption {
  font?: EColorMap;
  default?: EColorMap;
  hover?: EColorMap;
  active?: EColorMap;
  icon?: {
    default?: EColorMap;
    hover?: EColorMap;
    active?: EColorMap;
  };
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TButtonSize;
  variant?: "ghost" | "solid" | "quiet" | "minimal" | "minimal2";
  buttonColor?: "black" | "gray" | "blue" | "red";
  colorOption?: IColorOption;
  spacer?: boolean;
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
      spacer = true,
      fullWidth,
      loading,
      rounded,
      buttonColor = "black",
      colorOption,
      label,
      ...restProps
    } = props;

    const Btn = styled.button`
      &._BUTTON_.${variant} {
        ${!spacer && "margin-left: 0px;"}
        ${colorOption?.default && `background-color: ${colorOption?.default}; `}
      ${colorOption?.font && `color: ${colorOption?.font};`}
    
      ${colorOption?.icon?.default &&
        `
      i > svg #icon__fill {
        fill: ${colorOption?.icon?.default};
      }`}
    
      &:hover {
          ${colorOption?.hover && `background-color: ${colorOption?.hover};`}
          ${colorOption?.icon?.hover &&
          `
        i > svg #icon__fill {
          fill: ${colorOption?.icon?.hover};
        }`}
        }

        &:active {
          ${colorOption?.active && `background-color: ${colorOption?.active};`}
          ${colorOption?.icon?.active &&
          `
        i > svg #icon__fill {
          fill: ${colorOption?.icon?.active};
        }`}
        }
      }
    `;

    return (
      <Btn
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
      </Btn>
    );
  },
);

export default Button;
