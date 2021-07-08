import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IFullscreenIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "default" | "exit";
}

export const FullscreenIcon: React.FC<IFullscreenIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "default",
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
      {variant === "default" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M5 5H10V3H5C3.89543 3 3 3.89543 3 5V10H5V5ZM10 19H5V14H3V19C3 20.1046 3.89543 21 5 21H10V19ZM21 14H19V19H14V21H19C20.1046 21 21 20.1046 21 19V14ZM19 10H21V5C21 3.89543 20.1046 3 19 3H14V5H19V10Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M10 4H8V8H4V10H10V4ZM8 20H10V14H4V16H8V20ZM20 14H14V20H16V16H20V14ZM20 8H16V4H14V10H20V8Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
