import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ILinkExternalIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const LinkExternalIcon: React.FC<ILinkExternalIconProps> = ({
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
          d="M17.5858 5H13V3H21V11H19V6.41424L10.7071 14.7071L9.29291 13.2929L17.5858 5ZM5 5H11V7H5V19H17V13H19V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
