import React, { HTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";
import { TFontSize } from "../..";
import { colorMap, IColorMap } from "../Icon/colorMap";

export interface ITextProps
  extends HTMLAttributes<
    HTMLDivElement | HTMLSpanElement | HTMLHeadingElement
  > {
  textColor?: keyof IColorMap;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "block" | "inline";
  weight?: "light" | "regular" | "medium" | "bold";
  lineHeight?: "narrow" | "wide";
  size?: TFontSize;
  align?: "start" | "center" | "end";
}

const Text: React.FC<ITextProps> = ({
  className,
  children,
  variant = "block",
  weight,
  lineHeight,
  size,
  align,
  textColor,
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
            `text-align-${align}`
          )}
          style={{ color: textColor ? colorMap[textColor] : undefined }}
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
            `text-align-${align}`
          )}
          style={{ color: textColor ? colorMap[textColor] : undefined }}
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
            `text-align-${align}`
          )}
          style={{ color: textColor ? colorMap[textColor] : undefined }}
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
            `text-align-${align}`
          )}
          style={{ color: textColor ? colorMap[textColor] : undefined }}
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
            `text-align-${align}`
          )}
          style={{ color: textColor ? colorMap[textColor] : undefined }}
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
            `text-align-${align}`
          )}
          style={{ color: textColor ? colorMap[textColor] : undefined }}
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
            `text-align-${align}`
          )}
          style={{ color: textColor ? colorMap[textColor] : undefined }}
          {...props}
        >
          {children}
        </span>
      );
  }
};

export default Text;
