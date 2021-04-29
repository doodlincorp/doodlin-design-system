import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IChevronIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?: "sm" | "lg";
}

export const ChevronIcon: React.FC<IChevronIconProps> = ({
  color,
  className,
  variant = "sm",
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
      {variant === "sm" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 11L8 5L2 11"
            stroke={color ? colorMap[color] : colorMap.gray_6}
            strokeWidth="2"
          />
        </svg>
      )}

      {variant === "lg" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12L10 8L6 4"
            stroke={color ? colorMap[color] : colorMap.gray_6}
            strokeWidth="2"
          />
        </svg>
      )}
    </div>
  );
};
