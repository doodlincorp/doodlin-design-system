import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IRightAreaTabIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?: "left" | "right";
}

export const RightAreaTabIcon: React.FC<IRightAreaTabIconProps> = ({
  color,
  className,
  variant = "left",
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
      {variant === "left" && (
        <svg
          width="7"
          height="14"
          viewBox="0 0 7 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__stroke"
            d="M6 13L2 7L6 1"
            stroke={color ? colorMap[color] : colorMap.gray_6}
            strokeWidth="2"
          />
        </svg>
      )}
      {variant === "right" && (
        <svg
          width="7"
          height="14"
          viewBox="0 0 7 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__stroke"
            d="M1 13L5 7L1 1"
            stroke={color ? colorMap[color] : colorMap.gray_6}
            strokeWidth="2"
          />
        </svg>
      )}
    </div>
  );
};
