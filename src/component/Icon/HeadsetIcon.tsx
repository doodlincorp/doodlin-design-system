import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IHeadsetIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const HeadsetIcon: React.FC<IHeadsetIconProps> = ({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 12V19C20 19.5523 19.5523 20 19 20H14.5C14.5 18.8954 13.6046 18 12.5 18H11.5C10.3954 18 9.5 18.8954 9.5 20C9.5 21.1046 10.3954 22 11.5 22H12H12.5H19C20.6569 22 22 20.6569 22 19V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V14H4V12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM5 11.5C5 10.1193 6.11929 9 7.5 9H8C8.82843 9 9.5 9.67157 9.5 10.5V14.5C9.5 15.3284 8.82843 16 8 16H7.5C6.11929 16 5 14.8807 5 13.5V11.5ZM19 11.5C19 10.1193 17.8807 9 16.5 9H16C15.1716 9 14.5 9.67157 14.5 10.5V14.5C14.5 15.3284 15.1716 16 16 16H16.5C17.8807 16 19 14.8807 19 13.5V11.5Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
