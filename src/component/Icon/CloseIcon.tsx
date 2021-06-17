import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICloseIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const CloseIcon: React.FC<ICloseIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
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
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          d="M18.0002 4L11.9993 10L5.99982 4L4 6L9.99947 12L4 18L5.99982 20L11.9993 14L18.0002 20L20 18L14.0005 12L20 6L18.0002 4Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
