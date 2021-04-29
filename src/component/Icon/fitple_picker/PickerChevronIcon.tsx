import React from "react";
import { colorMap, IColorMap } from "../colorMap";
import cn from "classnames";
import "./PickerChevronIcon.scss";

export interface IPickerChevronIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?: "left" | "right" | "top" | "bottom";
}

export const PickerChevronIcon: React.FC<IPickerChevronIconProps> = ({
  color,
  className,
  variant = "right",
}) => {
  return (
    <div
      className={cn(
        "PickerChevron",
        {
          left: variant === "left",
          right: variant === "right",
          top: variant === "top",
          bottom: variant === "bottom",
        },
        className,
      )}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
    </div>
  );
};
