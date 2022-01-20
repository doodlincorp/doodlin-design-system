import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IPlayIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const PlayIcon: React.FC<IPlayIconProps> = ({
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
          d="M18.6043 11.1468C19.2422 11.5367 19.2422 12.4632 18.6043 12.8532L8.77158 18.8641C8.10523 19.2714 7.25 18.7919 7.25 18.0109L7.25 5.98913C7.25 5.20814 8.10523 4.72858 8.77158 5.13593L18.6043 11.1468Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
