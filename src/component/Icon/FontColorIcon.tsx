import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IFontColorIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const FontColorIcon: React.FC<IFontColorIconProps> = ({
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
          d="M12.5 4H11.5C11.099 4 10.736 4.24 10.579 4.609L5.745 16H7.918L9.191 13H14.795L16.063 16H18.234L13.421 4.61C13.3444 4.4291 13.2162 4.27477 13.0524 4.16628C12.8886 4.0578 12.6965 3.99996 12.5 4ZM10.04 11L11.999 6.384L13.95 11H10.04Z"
          fill={EColorMap.gray_8}
        />
        <rect
          id="icon__fill"
          x="5"
          y="18"
          width="14"
          height="3"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
