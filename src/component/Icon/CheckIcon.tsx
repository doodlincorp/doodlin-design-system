import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface ICheckIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?: "sm" | "lg" | "double";
}

export const CheckIcon: React.FC<ICheckIconProps> = ({
  color,
  className,
  variant = "sm",
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
      {variant === "sm" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="check-icon__color"
            d="M6.79999 11.992L3 8.19202L4.414 6.77802L6.79999 9.164L11.964 4L13.378 5.414L6.79999 11.992Z"
            fill={color ? colorMap[color] : colorMap.white}
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
            id="check-icon__color"
            d="M6.12622 14L1 8.76979L2.9075 6.82359L6.12622 10.1076L13.0925 3L15 4.9462L6.12622 14Z"
            fill={color ? colorMap[color] : colorMap.white}
          />
        </svg>
      )}
      {variant === "double" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99997 14.414L2.29297 10.707L3.70697 9.29297L5.99997 11.586L11.293 6.29297L12.707 7.70697L5.99997 14.414Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
          <path
            d="M5.99997 9.41397L2.29297 5.70697L3.70697 4.29297L5.99997 6.58597L11.293 1.29297L12.707 2.70697L5.99997 9.41397Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </div>
  );
};
