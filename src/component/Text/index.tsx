import React from "react";
import cn from "classnames";
import "./index.scss";
import { TFontSize } from "../..";

export interface ITextProps {
  className?: string;
  variant?: "title" | "sub-title" | "block" | "inline";
  weight?: "regular" | "medium" | "bold";
  size?: TFontSize;
}

const Text: React.FC<ITextProps> = ({
  className,
  children,
  size = "md",
  variant = "inline",
  weight = "regular",
  ...props
}) => {
  switch (variant) {
    case "title":
      return (
        <h1 className={cn("_TEXT_", className, size, weight)} {...props}>
          {children}
        </h1>
      );
    case "sub-title":
      return (
        <h2 className={cn("_TEXT_", className, size, weight)} {...props}>
          {children}
        </h2>
      );
    case "block":
      return (
        <div className={cn("_TEXT_", className, size, weight)} {...props}>
          {children}
        </div>
      );
    default:
      return (
        <span className={cn("_TEXT_", className, size, weight)} {...props}>
          {children}
        </span>
      );
  }
};

export default Text;
