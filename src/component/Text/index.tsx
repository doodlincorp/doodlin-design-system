import React from "react";
import cn from "classnames";
import "./index.scss";
import { TFontSize } from "../..";

export interface ITextProps {
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "block" | "inline";
  weight?: "light" | "regular" | "medium" | "bold";
  lineHeight?: "medium" | "large";
  size?: TFontSize;
}

const Text: React.FC<ITextProps> = ({
  className,
  children,
  variant = "inline",
  weight,
  lineHeight,
  size,
  ...props
}) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={cn(
            "_TEXT_",
            className,
            `font-size-${size}`,
            `font-weight-${weight}`,
            `line-height-${lineHeight}`,
          )}
          {...props}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(
            "_TEXT_",
            className,
            `font-size-${size}`,
            `font-weight-${weight}`,
            `line-height-${lineHeight}`,
          )}
          {...props}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(
            "_TEXT_",
            className,
            `font-size-${size}`,
            `font-weight-${weight}`,
            `line-height-${lineHeight}`,
          )}
          {...props}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={cn(
            "_TEXT_",
            className,
            `font-size-${size}`,
            `font-weight-${weight}`,
            `line-height-${lineHeight}`,
          )}
          {...props}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={cn(
            "_TEXT_",
            className,
            `font-size-${size}`,
            `font-weight-${weight}`,
            `line-height-${lineHeight}`,
          )}
          {...props}
        >
          {children}
        </h5>
      );
    case "block":
      return (
        <div
          className={cn(
            "_TEXT_",
            className,
            `font-size-${size}`,
            `font-weight-${weight}`,
            `line-height-${lineHeight}`,
          )}
          {...props}
        >
          {children}
        </div>
      );
    default:
      return (
        <span
          className={cn(
            "_TEXT_",
            className,
            `font-size-${size}`,
            `font-weight-${weight}`,
            `line-height-${lineHeight}`,
          )}
          {...props}
        >
          {children}
        </span>
      );
  }
};

export default Text;
