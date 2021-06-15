import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICameraIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const CameraIcon: React.FC<ICameraIconProps> = ({
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
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.414 5H20C21.103 5 22 5.897 22 7V18C22 19.103 21.103 20 20 20H4C2.897 20 2 19.103 2 18V7C2 5.897 2.897 5 4 5H6.586L9.293 2.293C9.48 2.105 9.734 2 10 2H14C14.266 2 14.52 2.105 14.707 2.293L17.414 5ZM7 12C7 14.71 9.29 17 12 17C14.71 17 17 14.71 17 12C17 9.29 14.71 7 12 7C9.29 7 7 9.29 7 12ZM9 12C9 10.374 10.374 9 12 9C13.626 9 15 10.374 15 12C15 13.626 13.626 15 12 15C10.374 15 9 13.626 9 12Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
