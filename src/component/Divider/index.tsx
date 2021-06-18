import React from "react";
import "./index.scss";
import cn from "classnames";
import { colorMap, IColorMap } from "../Icon/colorMap";

export interface IDividerProps {
  className?: string;
  variant?: "default" | "vertical";
  color?: keyof IColorMap;
  size?: number;
  width?: number;
  height?: number;
}

const Divider: React.FC<IDividerProps> = ({
  className,
  variant = "default",
  color,
  size = "8",
  width,
  height,
}) => {
  return (
    <hr
      className={cn("_DIVIDER_", className, variant)}
      style={{
        backgroundColor: `${color ? colorMap[color] : colorMap.gray_2}`,
        margin: `${variant === "default" ? `${size}px` : 0} ${
          variant === "vertical" ? `${size}px` : 0
        }`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};

export default Divider;
