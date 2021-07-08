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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 2H20C21.103 2 22 2.897 22 4V16H20V4H8V2ZM16 22H4C2.896 22 2 21.104 2 20V8C2 6.896 2.896 6 4 6H16C17.104 6 18 6.896 18 8V20C18 21.104 17.104 22 16 22ZM9 13H6V15H9V18H11V15H14V13H11V10H9V13Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 2H20C21.104 2 22 2.896 22 4V14C22 15.104 21.104 16 20 16H18V15V8C18 6.896 17.104 6 16 6H9H8V4C8 2.896 8.896 2 10 2ZM16 20C16 21.103 15.103 22 14 22H4C2.897 22 2 21.103 2 20V10C2 8.897 2.897 8 4 8H14C15.103 8 16 8.897 16 10V20ZM12 14V12H6V14H12ZM12 18V16H6V18H12Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
