import React, { ButtonHTMLAttributes, useRef } from "react";
import cn from "classnames";
import "./index.scss";
import styled from 'styled-components'
import { EColorMap, TButtonSize } from "../..";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TButtonSize;
  variant?: "ghost" | "solid" | "quiet" | "minimal";
  buttonColor?: "black" | "gray" | "blue" | "red";
  colorOption?: {
    font?: EColorMap,
    default?: EColorMap,
    hover?: EColorMap,
    active?: EColorMap,
    icon?: {
      default?: EColorMap,
      hover?: EColorMap,
      active?: EColorMap,
    }
  }
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
      colorOption,
      label,
      ...restProps
    } = props;


    var bgc = colorOption?.default;
    var hover = colorOption?.hover;
    var active = colorOption?.active;
    var font = colorOption?.font;
    var iconColor = colorOption?.icon;

    const Btn = styled.button`
      &._BUTTON_.${variant}{
        ${(bgc && `background-color: ${bgc};`)}
        ${(font && `color: ${font};`)}

        
        ${(iconColor?.default && `
        i > svg #icon__fill {
          fill: ${iconColor.default};
        }`)}

        &:hover{
          ${(hover && `background-color: ${hover};`)}
          ${(iconColor?.hover && `
          i > svg #icon__fill {
            fill: ${iconColor.hover};
          }`)}
        }

        &:active{
          ${(active && `background-color: ${active};`)}
          ${(iconColor?.active && `
          i > svg #icon__fill {
            fill: ${iconColor.active};
          }`)}
        }
      }
`

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
