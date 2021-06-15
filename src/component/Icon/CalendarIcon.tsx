import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICalendarIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;

  variant?: "default" | "check" | "x";
}

export const CalendarIcon: React.FC<ICalendarIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,

  variant = "default",
}) => {
  return (
    <i
      className={cn("dds-icon", className, { flip })}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {variant === "default" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 22H5C3.897 22 3 21.103 3 20V8V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4H19C20.103 4 21 4.897 21 6V8V20C21 21.103 20.103 22 19 22ZM19.001 20L19 8H5V20H19.001ZM9 11H7V13H9V11ZM9 15H7V17H9V15ZM13 11H11V13H13V11ZM13 15H11V17H13V15ZM17 11H15V13H17V11ZM17 15H15V17H17V15Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
      {variant === "check" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 4H19C20.103 4 21 4.897 21 6V8V20C21 21.103 20.103 22 19 22H5C3.897 22 3 21.103 3 20V8V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4ZM5 20H19.002L19 8H5V20ZM16.707 11.707L11 17.414L7.293 13.707L8.707 12.293L11 14.586L15.293 10.293L16.707 11.707Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
      {variant === "x" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 4H19C20.103 4 21 4.897 21 6V8V20C21 21.103 20.103 22 19 22H5C3.897 22 3 21.103 3 20V8V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4ZM5 20H19.002L19 8H5V20ZM9.707 17.707L8.293 16.293L10.586 14L8.293 11.707L9.707 10.293L12 12.586L14.293 10.293L15.707 11.707L13.414 14L15.707 16.293L14.293 17.707L12 15.414L9.707 17.707Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
