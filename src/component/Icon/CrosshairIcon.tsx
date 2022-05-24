import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICrosshairIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const CrosshairIcon: React.FC<ICrosshairIconProps> = ({
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
          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM13 19.931V17H11V19.931C9.24017 19.7066 7.60466 18.9043 6.3502 17.6498C5.09574 16.3953 4.29335 14.7598 4.069 13H7V11H4.069C4.29335 9.24017 5.09574 7.60466 6.3502 6.3502C7.60466 5.09574 9.24017 4.29335 11 4.069V7H13V4.069C14.7599 4.29319 16.3955 5.09552 17.65 6.35001C18.9045 7.6045 19.7068 9.2401 19.931 11H17V13H19.931C19.7066 14.7598 18.9043 16.3953 17.6498 17.6498C16.3953 18.9043 14.7598 19.7066 13 19.931V19.931Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
