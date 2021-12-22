import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICarouselIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const CarouselIcon: React.FC<ICarouselIconProps> = ({
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
          d="M4 19H6C6 20.103 6.897 21 8 21H16C17.103 21 18 20.103 18 19H20C21.103 19 22 18.103 22 17V7C22 5.897 21.103 5 20 5H18C18 3.897 17.103 3 16 3H8C6.897 3 6 3.897 6 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19ZM20 7V17H18V7H20ZM8 5H16L16.001 19H8V5ZM4 7H6V17H4V7Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
