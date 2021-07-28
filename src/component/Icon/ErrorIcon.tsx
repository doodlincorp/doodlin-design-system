import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IErrorIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "triangle" | "circle";
}

export const ErrorIcon: React.FC<IErrorIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "triangle",
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
      {variant === "triangle" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M12.884 2.532C12.538 1.878 11.462 1.878 11.116 2.532L2.116 19.532C1.952 19.842 1.962 20.216 2.143 20.515C2.324 20.816 2.649 21 3 21H21C21.351 21 21.676 20.816 21.856 20.516C22.038 20.216 22.047 19.842 21.883 19.533L12.884 2.532ZM13 18H11V16H13V18ZM11 14V9H13L13.001 14H11Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "circle" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            id="icon__fill"
            x="2"
            y="2"
            width="20"
            height="20"
            rx="10"
            fill={color || EColorMap.red_6}
          />
          <rect
            x="9.05365"
            y="7.87524"
            width="10"
            height="1.66667"
            transform="rotate(45 9.05365 7.87524)"
            fill="white"
          />
        </svg>
      )}
    </i>
  );
};
