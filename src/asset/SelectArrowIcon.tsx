import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IInfoMarkIconProps {
  variant?: "single" | "double";
  color?: keyof IColorMap;
  className?: string;
}

const SelectArrowIcon: React.FC<IInfoMarkIconProps> = ({
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
            fill={colorMap[color]}
            id="select-arrow-icon__color"
          />
          <path
            d="M8 2L4 6L12 6L8 2Z"
            fill={colorMap[color]}
            id="select-arrow-icon__color"
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
            id="select-arrow-icon__color"
            fill={colorMap[color]}
          />
        </svg>
      )}
    </div>
  );
};

export default SelectArrowIcon;
