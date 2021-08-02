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
  variant?: "solid-lock" | "solid-unlock" | "border-lock" | "border-unlock";
}

export const LockIcon: React.FC<ILockIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "border-lock",
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
      {variant === "border-lock" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9H18C19.1046 9 20 9.89543 20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11C4 9.89543 4.89543 9 6 9H7V7ZM15 7V9H9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM18 19V11H6V19H18Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "border-unlock" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7V8H20V7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7V10H16C17.1046 10 18 10.8954 18 12V20C18 21.1046 17.1046 22 16 22H4C2.89543 22 2 21.1046 2 20V12C2 10.8954 2.89543 10 4 10H12V7ZM16 12H4V20H16V12Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "solid-lock" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C9.23858 2 7 4.23858 7 7V9H6C4.89543 9 4 9.89543 4 11V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11C20 9.89543 19.1046 9 18 9H17V7C17 4.23858 14.7614 2 12 2ZM15 9V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V9H15Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "solid-unlock" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 2C14.2386 2 12 4.23858 12 7V10H4C2.89543 10 2 10.8954 2 12V20C2 21.1046 2.89543 22 4 22H16C17.1046 22 18 21.1046 18 20V12C18 10.8954 17.1046 10 16 10H14V7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7V8H22V7C22 4.23858 19.7614 2 17 2Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
