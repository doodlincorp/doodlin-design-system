import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IAlignIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;

  variant?: "list" | "kanban" | "left" | "center" | "right";
}

export const AlignIcon: React.FC<IAlignIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,

  variant = "kanban",
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
      {variant === "kanban" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.01033 4.79551C3.0035 4.86275 3 4.93096 3 5V13C3 14.1046 3.89543 15 5 15H8V19C8 20.1046 8.89543 21 10 21H14C15.1046 21 16 20.1046 16 19V17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.96447 3 3.11275 3.787 3.01033 4.79551ZM14 19V17V15V5H10V13V15V19H14ZM16 15V5H19V15H16ZM8 5H5V13H8V5Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "list" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 7H20V9H10V7ZM10 11H20V13H10V11ZM8 13V11H4V13H8ZM4 15H8V17H4V15ZM10 15H20V17H10V15ZM8 7V9H4V7H8ZM2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "left" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4L5 20H4V4H5ZM7 7H21V11H7V7ZM17 13H7V17H17V13Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "center" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 4V7H19V11H12.5V13H17V17H12.5V20H11.5V17H7V13H11.5V11H5V7H11.5V4H12.5Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "right" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 20L19 4H20L20 20H19ZM17 11L3 11V7L17 7V11ZM7 17L17 17V13L7 13L7 17Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
