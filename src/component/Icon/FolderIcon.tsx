import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IFolderIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const FolderIcon: React.FC<IFolderIconProps> = ({
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
          d="M20 5H10.414L8.707 3.293C8.52 3.105 8.265 3 8 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V7C22 5.897 21.103 5 20 5Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
