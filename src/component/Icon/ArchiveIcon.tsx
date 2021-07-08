import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IArchiveIConProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const ArchiveIcon: React.FC<IArchiveIConProps> = ({
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
          d="M20 3H4C2.897 3 2 3.897 2 5V13V14V19C2 20.104 2.896 21 4 21H20C21.104 21 22 20.104 22 19V14V13V5C22 3.897 21.103 3 20 3ZM19 12H16H15.858C15.412 13.722 13.861 15 12 15C10.139 15 8.588 13.722 8.142 12H8H4V5H20V12H19Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
