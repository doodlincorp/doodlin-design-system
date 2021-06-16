import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface ILinkIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const LinkIcon: React.FC<ILinkIconProps> = ({
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.757 21.24C6.477 21.24 5.197 20.753 4.222 19.778C2.273 17.829 2.273 14.656 4.222 12.707L7.051 9.879L8.465 11.293L5.636 14.121C4.467 15.291 4.467 17.194 5.636 18.364C6.807 19.533 8.71 19.531 9.879 18.364L12.707 15.535L14.121 16.949L11.293 19.778C10.319 20.753 9.038 21.239 7.757 21.24ZM19.778 4.222C21.726 6.171 21.726 9.344 19.778 11.293L16.949 14.121L15.535 12.707L18.364 9.879C19.533 8.709 19.533 6.806 18.364 5.636C17.194 4.467 15.291 4.469 14.121 5.636L11.293 8.465L9.879 7.051L12.707 4.222C14.655 2.274 17.828 2.272 19.778 4.222ZM7.04948 15.5361L8.46367 16.9504L16.9498 8.46454L15.5356 7.0503L7.04948 15.5361Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
