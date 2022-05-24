import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IMagicWandIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const MagicWandIcon: React.FC<IMagicWandIconProps> = ({
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
          d="M10.586 4L10.086 3L9.586 4L8.586 4.125L9.42 4.833L9.086 6L10.086 5.334L11.086 6L10.752 4.833L11.586 4.125L10.586 4ZM18.92 14.666L18.086 13L17.252 14.666L15.586 14.875L16.975 16.056L16.42 18L18.086 16.889L19.752 18L19.197 16.056L20.586 14.875L18.92 14.666ZM6.253 6.333L5.586 5L4.919 6.333L3.586 6.5L4.697 7.444L4.253 9L5.586 8.111L6.919 9L6.475 7.444L7.586 6.5L6.253 6.333ZM3 17C3 17.534 3.208 18.036 3.586 18.414L5.172 20C5.55 20.378 6.052 20.586 6.586 20.586C7.12 20.586 7.622 20.378 8 20L19.586 8.414C19.964 8.036 20.172 7.534 20.172 7C20.172 6.466 19.964 5.964 19.586 5.586L18 4C17.244 3.244 15.928 3.244 15.172 4L3.586 15.586C3.208 15.964 3 16.466 3 17ZM16.586 5.414L18.172 7L14.586 10.586L13 9L16.586 5.414Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
