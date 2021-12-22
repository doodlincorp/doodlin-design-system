import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IUnderlineIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const UnderlineIcon: React.FC<IUnderlineIconProps> = ({
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
          d="M5 18H19V20H5V18ZM6 4V10C6 13.309 8.691 16 12 16C15.309 16 18 13.309 18 10V4H16V10C16 12.206 14.206 14 12 14C9.794 14 8 12.206 8 10V4H6Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
