import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IMapPinIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const MapPinIcon: React.FC<IMapPinIconProps> = ({
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
          d="M12.0002 2.00009C7.58922 2.00009 4.00022 5.58909 4.00022 9.99509C3.97122 16.4401 11.6962 21.7841 12.0002 22.0001C12.0002 22.0001 20.0292 16.4401 20.0002 10.0001C20.0002 5.58909 16.4112 2.00009 12.0002 2.00009ZM12.0002 14.0001C9.79022 14.0001 8.00022 12.2101 8.00022 10.0001C8.00022 7.79009 9.79022 6.00009 12.0002 6.00009C14.2102 6.00009 16.0002 7.79009 16.0002 10.0001C16.0002 12.2101 14.2102 14.0001 12.0002 14.0001Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
