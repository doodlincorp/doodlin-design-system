import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IPieChartIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "default" | "alt" | "doughnut";
}

export const PieChartIcon: React.FC<IPieChartIconProps> = ({
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
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {variant === "default" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12ZM4 12C4 16.411 7.589 20 12 20C16.411 20 20 16.411 20 12C20 7.589 16.411 4 12 4C7.589 4 4 7.589 4 12ZM12 12V5.16599C15.787 5.16599 18.834 8.21198 18.834 12H12Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      ) : variant === "alt" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM19.931 11H13V6V4.069C16.611 4.522 19.478 7.389 19.931 11ZM4 12C4 7.928 7.061 4.564 11 4.069V6V12C11 12.119 11.028 12.234 11.069 12.345C11.082 12.377 11.095 12.407 11.111 12.438C11.126 12.468 11.133 12.501 11.152 12.531L15.354 19.254C14.332 19.728 13.198 20 12 20C7.589 20 4 16.411 4 12ZM17.052 18.196L13.805 13H19.931C19.669 15.087 18.605 16.928 17.052 18.196Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM19.931 11H16.899C16.5 9.044 14.956 7.5 13 7.102V4.069C16.611 4.522 19.478 7.389 19.931 11ZM12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9ZM12 20C7.589 20 4 16.411 4 12C4 7.928 7.061 4.564 11 4.069V7.101C8.721 7.565 7 9.586 7 12C7 14.757 9.243 17 12 17C14.414 17 16.435 15.279 16.898 13H19.93C19.436 16.939 16.072 20 12 20Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
