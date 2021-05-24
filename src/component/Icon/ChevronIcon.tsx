import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import cn from "classnames";
import { useMemo } from "@storybook/addons";

export interface IPickerChevronIconProps {
  color?: keyof IColorMap;
  className?: string;
  MinMax?: boolean;
  variant?: "left" | "right" | "top" | "bottom";
}

export const ChevronIcon: React.FC<IPickerChevronIconProps> = ({
  color,
  className,
  MinMax,
  variant,
}) => {
  const degNum = () => {
    switch (variant) {
      case "right":
        return 0;
      case "left":
        return 180;
      case "top":
        return -90;
      case "bottom":
        return 90;
    }
  };

  return (
    <div
      className={cn(className)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `rotate(${degNum()}deg)`,
      }}
    >
      {MinMax ? (
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
            stroke-width="2"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M11.9139 7.99971L6.20696 2.29272L4.79297 3.70672L9.08595 7.99971L4.79297 12.2927L6.20696 13.7067L11.9139 7.99971Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
    </div>
  );
};
