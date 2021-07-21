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
            d="M4 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21ZM4 19V7H20L20.001 19H4Z"
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
