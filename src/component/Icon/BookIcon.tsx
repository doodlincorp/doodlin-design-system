import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IBookIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "solid" | "border";
}

export const BookIcon: React.FC<IBookIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "solid",
}) => {
  return (
    <i
      className={cn("dds-icon", className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {variant === "solid" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M3 2H5V22H3V2ZM19 2H6V22H19C20.103 22 21 21.103 21 20V4C21 2.897 20.103 2 19 2ZM18 12H9V10H18V12ZM18 8H9V6H18V8Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "border" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 2H3V22H5V2ZM17 6H10V8H17V6ZM17 10H10V12H17V10ZM6 2H19C20.103 2 21 2.897 21 4V20C21 21.103 20.103 22 19 22H6V2ZM8 20H19V4H8V20Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
