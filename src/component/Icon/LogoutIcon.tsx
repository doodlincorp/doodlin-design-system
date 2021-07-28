import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ILogoutIconProps {
  color?: EColorMap;
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H13C14.103 21 15 20.103 15 19V15H13V19H4V5H13V9H15V5C15 3.897 14.103 3 13 3ZM17 11H8V13H17V16L22 12L17 8V11Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
