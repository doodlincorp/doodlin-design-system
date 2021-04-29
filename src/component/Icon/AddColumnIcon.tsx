import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IAddColumnIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?: "left" | "right";
}

export const AddColumnIcon: React.FC<IAddColumnIconProps> = ({
  color,
  className,
  variant = "right",
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
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1" fill="white">
            <rect x="9" width="6" height="16" rx="1" />
          </mask>
          <rect
            x="9"
            width="6"
            height="16"
            rx="1"
            stroke={color ? colorMap[color] : colorMap.gray_8}
            strokeWidth="4"
            mask="url(#path-1-inside-1)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 0C3.22386 0 3 0.223858 3 0.5V2H1.5C1.22386 2 1 2.22386 1 2.5V3.5C1 3.77614 1.22386 4 1.5 4H3V5.5C3 5.77614 3.22386 6 3.5 6H4.5C4.77614 6 5 5.77614 5 5.5V4H6.5C6.77614 4 7 3.77614 7 3.5V2.5C7 2.22386 6.77614 2 6.5 2H5V0.5C5 0.223858 4.77614 0 4.5 0H3.5Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}

      {variant === "right" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1" fill="white">
            <rect x="1" width="6" height="16" rx="1" />
          </mask>
          <rect
            x="1"
            width="6"
            height="16"
            rx="1"
            stroke={color ? colorMap[color] : colorMap.gray_8}
            strokeWidth="4"
            mask="url(#path-1-inside-1)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5 0C11.2239 0 11 0.223858 11 0.5V2H9.5C9.22386 2 9 2.22386 9 2.5V3.5C9 3.77614 9.22386 4 9.5 4H11V5.5C11 5.77614 11.2239 6 11.5 6H12.5C12.7761 6 13 5.77614 13 5.5V4H14.5C14.7761 4 15 3.77614 15 3.5V2.5C15 2.22386 14.7761 2 14.5 2H13V0.5C13 0.223858 12.7761 0 12.5 0H11.5Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </div>
  );
};
