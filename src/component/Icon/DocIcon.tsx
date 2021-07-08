import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IDocumentIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "solid" | "border" | "blank" | "plus";
}

export const DocIcon: React.FC<IDocumentIconProps> = ({
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
            d="M18 22C19.104 22 20 21.104 20 20V8L14 2H6C4.896 2 4 2.896 4 4V20C4 21.104 4.896 22 6 22H18ZM13 4L18 9H14C13.447 9 13 9 13 9V4ZM7 8H10V10H7V8ZM7 12H17V14H7V12ZM7 16H17V18H7V16Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "border" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.707 8.293C19.793 8.379 19.854 8.48 19.903 8.586C19.9154 8.61255 19.9239 8.63989 19.9326 8.668C19.9337 8.67166 19.9349 8.67532 19.936 8.679C19.965 8.763 19.982 8.849 19.987 8.938C19.9879 8.94813 19.9907 8.95762 19.9935 8.96697C19.9968 8.97792 20 8.98867 20 9V20C20 21.103 19.103 22 18 22H6C4.897 22 4 21.103 4 20V4C4 2.897 4.897 2 6 2H13C13.0115 2 13.0224 2.00329 13.0333 2.0066C13.0424 2.00934 13.0515 2.01209 13.061 2.013C13.15 2.018 13.236 2.036 13.32 2.064C13.33 2.06743 13.3399 2.07056 13.3498 2.07368C13.3717 2.08057 13.3933 2.08736 13.414 2.097C13.52 2.146 13.621 2.207 13.707 2.293L19.707 8.293ZM14 8H16.586L14 5.414V8ZM6 4V20H18.002L18 10H13C12.447 10 12 9.553 12 9V4H6ZM16 14V12H8V14H16ZM16 18V16H8V18H16ZM10 8H8V10H10V8Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "blank" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M6 2C4.896 2 4 2.896 4 4V20C4 21.104 4.896 22 6 22H18C19.104 22 20 21.104 20 20V8L14 2H6ZM14 9C13.447 9 13 9 13 9V4L18 9H14Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "plus" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M6 22H18C19.104 22 20 21.104 20 20V8L14 2H6C4.896 2 4 2.896 4 4V20C4 21.104 4.896 22 6 22ZM13 4L18 9H14C13.447 9 13 9 13 9V4ZM8 14H11V11H13V14H16V16H13V19H11V16H8V14Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
