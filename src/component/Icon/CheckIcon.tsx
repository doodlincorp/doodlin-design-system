import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICheckIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;

  variant?: "single" | "double";
}

export const CheckIcon: React.FC<ICheckIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,

  variant = "single",
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
      {variant === "single" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M9.20459 16.9313L4.86388 12.1936L3 14.2279L9.20459 21L22 7.03435L20.1361 5L9.20459 16.9313Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
      {variant === "double" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.414 9L9.707 12.293L18 4L19.414 5.414L9.707 15.121L5 10.414L6.414 9ZM6.414 14L9.707 17.293L18 9L19.414 10.414L9.707 20.121L5 15.414L6.414 14Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
