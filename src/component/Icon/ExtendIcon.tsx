import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IExtendIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "default" | "alt";
}

export const ExtendIcon: React.FC<IExtendIconProps> = ({
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
            d="M21 15.344L18.879 17.465L15.707 14.293L14.293 15.707L17.465 18.879L15.344 21H21V15.344ZM3 8.656L5.121 6.535L8.293 9.707L9.707 8.293L6.535 5.121L8.656 3H3V8.656ZM21 3H15.344L17.465 5.121L14.293 8.293L15.707 9.707L18.879 6.535L21 8.656V3ZM3 21H8.656L6.535 18.879L9.707 15.707L8.293 14.293L5.121 17.465L3 15.344V21Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 12H18L18 7.41423L14.7071 10.7071L13.2929 9.29289L16.5858 6L12 6V4H18H20L20 6V12ZM6 12H4V18V20H6H12V18H7.41423L10.7071 14.7071L9.29291 13.2929L6 16.5858V12Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
