import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";
import { colorMap } from ".";

export interface IWindowIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "maximize" | "minimize";
}

export const WindowIcon: React.FC<IWindowIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "maximize",
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
      {variant === "maximize" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 8H5L5 18H19V8ZM3 8V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V8V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V8Z"
            fill={color || colorMap.gray_8}
          />
        </svg>
      )}

      {variant === "minimize" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M5 11H19V13H5V11Z"
            fill={color || colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
