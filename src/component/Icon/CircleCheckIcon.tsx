import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface ICircleCheckIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const CircleCheckIcon: React.FC<ICircleCheckIconProps> = ({
  color,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="icon__fill"
          d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z"
          fill={color ? colorMap[color] : colorMap.green_6}
        />
        <path
          d="M11.9449 20.1951L7.12988 15.3801L8.58488 13.9251L11.9449 17.3001L19.4149 9.83008L20.8699 11.2851L11.9449 20.1951Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
