import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IMemoIconProps {
  variant?: "default" | "quick";
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const MemoIcon: React.FC<IMemoIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "default",
}) => {
  if (variant === "quick") {
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
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M13.3333 2H2.66659C1.93125 2 1.33325 2.598 1.33325 3.33333V12.6667C1.33325 13.402 1.93125 14 2.66659 14H13.3333C14.0686 14 14.6666 13.402 14.6666 12.6667V3.33333C14.6666 2.598 14.0686 2 13.3333 2ZM2.66659 12.6667V3.33333H13.3333L13.3346 12.6667H2.66659Z"
            fill={color ? colorMap[color] : colorMap["gray_8"]}
          />
          <path
            id="icon__fill"
            d="M4 4.66675H12V6.00008H4V4.66675ZM4 7.33341H12V8.66675H4V7.33341ZM4 10.0001H8V11.3334H4V10.0001Z"
            fill={color ? colorMap[color] : colorMap["gray_8"]}
          />
        </svg>
      </i>
    );
  }
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
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM14 15H7V13H14V15ZM17 11H7V9H17V11ZM17 7H7V5H17V7Z"
          fill={color ? colorMap[color] : colorMap["yellow_6"]}
        />
      </svg>
    </i>
  );
};
