import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IDefaultImageIConProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const DefaultImageIcon: React.FC<IDefaultImageIConProps> = ({
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
          d="M5 21H19C20.104 21 21 20.104 21 19V5C21 3.896 20.104 3 19 3H5C3.896 3 3 3.896 3 5V19C3 20.104 3.896 21 5 21ZM8 14L10.363 16.363L14 11L19 18H5L8 14Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
