import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IClickModeIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const ClickModeIcon: React.FC<IClickModeIconProps> = ({
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.5463 5.42041V11.0454H16.6713V5.42041L5.42127 5.42041L5.42126 16.6704H11.0463V18.5454H5.42126C4.38573 18.5454 3.54626 17.7059 3.54626 16.6704V5.42041C3.54626 4.38488 4.38573 3.54541 5.42127 3.54541H16.6713C17.7068 3.54541 18.5463 4.38488 18.5463 5.42041ZM11.4537 11.4546L20.2755 13.8449L17.2235 16.0556L20.4537 19.3212L19.3287 20.4546L16.0763 17.189L13.8151 20.3536L11.4537 11.4546Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
