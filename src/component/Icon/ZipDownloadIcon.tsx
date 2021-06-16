import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IZipDownloadIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const ZipDownloadIcon: React.FC<IZipDownloadIconProps> = ({
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
          d="M4 4C4 2.896 4.896 2 6 2H9V4H7V6H9V8H7V10H9V12H7V18H11V12V10H9V8H11V6H9V4H11V2H14L20 8V20C20 21.104 19.104 22 18 22H6C4.896 22 4 21.104 4 20V4ZM18 9L13 4V9H14H18ZM10 17V15H8V17H10Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
