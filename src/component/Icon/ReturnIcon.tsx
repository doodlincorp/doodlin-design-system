import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IReturnIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const ReturnIcon: React.FC<IReturnIconProps> = ({
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
          d="M9 10H15C16.654 10 18 11.346 18 13C18 14.654 16.654 16 15 16H12V18H15C17.757 18 20 15.757 20 13C20 10.243 17.757 8 15 8H9V5L4 9L9 13V10Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
