import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IImageIConProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "default" | "add";
}

export const ImageIcon: React.FC<IImageIConProps> = ({
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
      {variant === "default" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.99902 4H19.999C21.102 4 21.999 4.897 21.999 6V18C21.999 19.103 21.102 20 19.999 20H3.99902C2.89602 20 1.99902 19.103 1.99902 18V6C1.99902 4.897 2.89602 4 3.99902 4ZM3.99902 6V18H20.001L19.999 6H3.99902ZM7.49902 11C8.32745 11 8.99902 10.3284 8.99902 9.5C8.99902 8.67157 8.32745 8 7.49902 8C6.6706 8 5.99902 8.67157 5.99902 9.5C5.99902 10.3284 6.6706 11 7.49902 11ZM10.499 14L8.99902 12L5.99902 16H17.999L13.499 10L10.499 14Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "add" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5H17V12H19V5C19 3.897 18.103 3 17 3H4C2.897 3 2 3.897 2 5V17C2 18.103 2.897 19 4 19H12V17H4V5ZM8 11L5 15H16L12 9L9 13L8 11ZM17 14H19V17H22V19H19V22H17V19H14V17H17V14Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
