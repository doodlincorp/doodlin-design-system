import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface ILogoutIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const LogoutIcon: React.FC<ILogoutIconProps> = ({
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 3H20C21.103 3 22 3.897 22 5V19C22 20.103 21.103 21 20 21H11C9.897 21 9 20.103 9 19V15H11V19H20V5H11V9H9V5C9 3.897 9.897 3 11 3ZM7 11H16V13H7V16L2 12L7 8V11Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
