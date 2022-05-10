import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICopyIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "default" | "alt";
}

export const CopyIcon: React.FC<ICopyIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "default",
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
      {variant === "default" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2H20C21.103 2 22 2.897 22 4V16H20V4H8V2ZM16 22H4C2.896 22 2 21.104 2 20V8C2 6.896 2.896 6 4 6H16C17.104 6 18 6.896 18 8V20C18 21.104 17.104 22 16 22ZM9 13H6V15H9V18H11V15H14V13H11V10H9V13Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 4H18V16H9V4ZM7 4C7 2.89543 7.89543 2 9 2H18C19.1046 2 20 2.89543 20 4V16C20 17.1046 19.1046 18 18 18H9C7.89543 18 7 17.1046 7 16V4ZM3 7H5V20H18V22H5C3.89543 22 3 21.1046 3 20V7Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
