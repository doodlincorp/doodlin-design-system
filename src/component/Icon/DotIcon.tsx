import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IDotIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "active" | "inactive";
}

export const DotIcon: React.FC<IDotIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "active",
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
      {variant === "active" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="12"
            r="6"
            fill={color || EColorMap.active_green}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="12"
            r="6"
            fill={color || EColorMap.inactive_red}
          />
        </svg>
      )}
    </i>
  );
};
