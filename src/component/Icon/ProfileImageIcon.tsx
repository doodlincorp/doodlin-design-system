import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IProfileImageIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const ProfileImageIcon: React.FC<IProfileImageIconProps> = ({
  color,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="40"
        height="50"
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="icon__fill"
          d="M20 24.8887C26.6274 24.8887 32 19.5161 32 12.8887C32 6.26125 26.6274 0.888672 20 0.888672C13.3726 0.888672 8 6.26125 8 12.8887C8 19.5161 13.3726 24.8887 20 24.8887Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          d="M39.9462 45.45C38.8915 39.4445 34.9039 29.333 20 29.333C5.09606 29.333 1.10854 39.4445 0.053772 45.45C-0.340693 47.716 1.48585 49.7774 3.86979 49.7774H20H36.1302C38.5141 49.7774 40.3407 47.716 39.9462 45.45Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
      </svg>
    </div>
  );
};
