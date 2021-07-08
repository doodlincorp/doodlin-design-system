import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ISendIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const SendIcon: React.FC<ISendIconProps> = ({
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
          d="M21.426 11.095L4.426 3.09499C4.076 2.93099 3.663 2.98199 3.365 3.22799C3.066 3.47299 2.937 3.86799 3.03 4.24199L4.242 9.09099L12 12L4.242 14.909L3.03 19.758C2.936 20.132 3.066 20.528 3.365 20.773C3.548 20.923 3.772 21 4 21C4.145 21 4.29 20.969 4.426 20.905L21.426 12.905C21.776 12.74 22 12.388 22 12C22 11.612 21.776 11.26 21.426 11.095Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
