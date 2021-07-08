import React from "react";
import { EColorMap } from "../../../utils/colorMap";
import "../index.scss";
import cn from "classnames";

export interface IPickerPositionIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;

  variant?: "left" | "right" | "top" | "bottom";
}

export const PickerPositionIcon: React.FC<IPickerPositionIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,

  variant = "right",
}) => {
  return (
    <i
      className={cn("dds-icon", className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
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
          <path
            id="icon__fill"
            d="M0 3C0 1.89543 0.895431 1 2 1H6V15H2C0.89543 15 0 14.1046 0 13V3Z"
            fill={color || EColorMap.gray_5}
          />
          <rect
            id="icon__stroke"
            x="0.5"
            y="1.5"
            width="15"
            height="13"
            rx="1.5"
            stroke={color || EColorMap.gray_5}
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
          <rect
            id="icon__stroke"
            x="0.5"
            y="1.5"
            width="15"
            height="13"
            rx="1.5"
            stroke={color || EColorMap.gray_5}
          />
          <path
            id="icon__fill"
            d="M10 1H14C15.1046 1 16 1.89543 16 3V13C16 14.1046 15.1046 15 14 15H10V1Z"
            fill={color || EColorMap.gray_5}
          />
        </svg>
      )}
      {variant === "top" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            id="icon__stroke"
            x="0.5"
            y="1.5"
            width="15"
            height="13"
            rx="1.5"
            stroke={color || EColorMap.gray_5}
          />
          <path
            id="icon__fill"
            d="M0 3C0 1.89543 0.895431 1 2 1H14C15.1046 1 16 1.89543 16 3V7H0V3Z"
            fill={color || EColorMap.gray_5}
          />
        </svg>
      )}
      {variant === "bottom" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            id="icon__stroke"
            x="0.5"
            y="1.5"
            width="15"
            height="13"
            rx="1.5"
            stroke={color || EColorMap.gray_5}
          />
          <path
            id="icon__fill"
            d="M0 9H16V13C16 14.1046 15.1046 15 14 15H2C0.895431 15 0 14.1046 0 13V9Z"
            fill={color || EColorMap.gray_5}
          />
        </svg>
      )}
    </i>
  );
};
