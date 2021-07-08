import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ISideBarIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const SideBarIcon: React.FC<ISideBarIconProps> = ({
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
          d="M4 3H20C21.103 3 22 3.897 22 5V19C22 20.103 21.103 21 20 21H12H10H4C2.897 21 2 20.103 2 19V5C2 3.897 2.897 3 4 3ZM4 7V19H10V7H4ZM12 7V19H20.002L20 5V7H12ZM8 10H6V12H8V10ZM8 14H6V16H8V14Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
