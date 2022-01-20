import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IPublishIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const PublishIcon: React.FC<IPublishIconProps> = ({
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
          fillRule="evenodd"
          clipRule="evenodd"
          id="icon__fill"
          d="M4 2C2.89543 2 2 2.89543 2 4V18C2 19.1046 2.89543 20 4 20H8V18H4L4 6H20V18H16V20H20C21.1046 20 22 19.1046 22 18V4C22 2.89543 21.1046 2 20 2H4ZM12 9.58578L16.7071 14.2929L15.2929 15.7071L13 13.4142V22H11V13.4142L8.70712 15.7071L7.29291 14.2929L12 9.58578Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
