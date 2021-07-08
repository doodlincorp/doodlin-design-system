import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ILockIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "locked" | "open";
}

export const LockIcon: React.FC<ILockIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "locked",
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
      {variant === "locked" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
