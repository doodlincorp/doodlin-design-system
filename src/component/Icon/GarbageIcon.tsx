import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IGarbageIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;

  variant?: "solid" | "border";
}

export const GarbageIcon: React.FC<IGarbageIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,

  variant = "solid",
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
      {variant === "solid" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M6 7C5.447 7 5 7 5 7V20C5 21.104 5.896 22 7 22H17C18.104 22 19 21.104 19 20V7C19 7 18.553 7 18 7H6ZM16.618 4L15 2H9L7.382 4H3V6H8H16H21V4H16.618Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "border" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M15 2H9C7.897 2 7 2.897 7 4V6H3V8H5V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V8H21V6H17V4C17 2.897 16.103 2 15 2ZM9 4H15V6H9V4ZM17 20H7V8H8H16H17V20Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
