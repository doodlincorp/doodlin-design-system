import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICollectionIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const CollectionIcon: React.FC<ICollectionIconProps> = ({
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
          d="M19 10H5C3.897 10 3 10.897 3 12V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V12C21 10.897 20.103 10 19 10ZM5 20V12H19L19.002 20H5ZM5 6H19V8H5V6ZM7 2H17V4H7V2Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
