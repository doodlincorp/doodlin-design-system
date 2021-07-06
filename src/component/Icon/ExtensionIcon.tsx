import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IExtensionIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "solid" | "border";
}

export const ExtensionIcon: React.FC<IExtensionIconProps> = ({
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
      {variant === "solid" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M19 10V7C19 5.897 18.103 5 17 5H14C14 3.346 12.654 2 11 2C9.346 2 8 3.346 8 5H5C3.897 5 3 5.897 3 7V11H4C5.104 11 6 11.896 6 13C6 14.104 5.104 15 4 15H3V19C3 20.103 3.897 21 5 21H9V20C9 18.896 9.896 18 11 18C12.104 18 13 18.896 13 20V21H17C18.103 21 19 20.103 19 19V16C20.654 16 22 14.654 22 13C22 11.346 20.654 10 19 10Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M19 10V7C19 5.897 18.103 5 17 5H14C14 3.346 12.654 2 11 2C9.346 2 8 3.346 8 5H5C3.897 5 3 5.897 3 7V10.881L3.659 11.12C4.461 11.41 5 12.166 5 13C5 13.834 4.461 14.59 3.659 14.88L3 15.119V19C3 20.103 3.897 21 5 21H8.881L9.12 20.341C9.41 19.539 10.166 19 11 19C11.834 19 12.59 19.539 12.88 20.341L13.119 21H17C18.103 21 19 20.103 19 19V16C20.654 16 22 14.654 22 13C22 11.346 20.654 10 19 10ZM19 14H17L16.997 19H14.452C13.741 17.78 12.43 17 11 17C9.57 17 8.259 17.78 7.548 19H5V16.452C6.22 15.741 7 14.43 7 13C7 11.57 6.22 10.259 5 9.548V7H10V5C10 4.448 10.448 4 11 4C11.552 4 12 4.448 12 5V7H17V12H19C19.552 12 20 12.448 20 13C20 13.552 19.552 14 19 14Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
