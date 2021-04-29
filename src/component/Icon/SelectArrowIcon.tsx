import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface ISelectArrowIconProps {
  variant?: "single" | "double";
  color?: keyof IColorMap;
  className?: string;
}

export const SelectArrowIcon: React.FC<ISelectArrowIconProps> = ({
  variant = "single",
  color = "gray_8",
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
      {variant === "double" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 14L12 10H4L8 14Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
            id="icon__fill"
          />
          <path
            d="M8 2L4 6L12 6L8 2Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
            id="icon__fill"
          />
        </svg>
      ) : (
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.01443 5.56998L9.58844 0.995972H0.44043L5.01443 5.56998Z"
            id="icon__fill"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </div>
  );
};

export default SelectArrowIcon;