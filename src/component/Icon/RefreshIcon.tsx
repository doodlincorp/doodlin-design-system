import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IRefreshIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const RefreshIcon: React.FC<IRefreshIconProps> = ({
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
          d="M15.7104 7.14851C14.8044 6.52037 13.7481 6.12874 12.6383 6.01944C11.139 5.87177 9.63482 6.24854 8.38215 7.08555C7.12948 7.92256 6.20578 9.16802 5.76845 10.6097C5.33111 12.0514 5.40719 13.6002 5.98374 14.9921C6.56028 16.384 7.6016 17.5329 8.93029 18.2431C10.259 18.9533 11.7928 19.1808 13.2704 18.8869C14.748 18.593 16.0781 17.7958 17.0338 16.6312C17.9896 15.4666 18.512 14.0066 18.512 12.5H20.5C20.5 13.1784 20.4189 13.8495 20.2614 14.5C19.9623 15.7354 19.3878 16.8966 18.5706 17.8924C17.323 19.4125 15.587 20.4531 13.6583 20.8367C11.7295 21.2204 9.72745 20.9234 7.99313 19.9964C6.25881 19.0694 4.89958 17.5697 4.14703 15.7529C3.39447 13.936 3.29516 11.9145 3.86601 10.0326C4.43686 8.15078 5.64255 6.52509 7.27765 5.43255C8.91276 4.34001 10.8761 3.84822 12.8331 4.04097C14.1151 4.16724 15.3424 4.58211 16.4275 5.24416C16.6401 5.37393 16.8473 5.51318 17.0484 5.66163V2.98438H19.0484V8.14851C19.0484 8.70079 18.6007 9.14851 18.0484 9.14851L12.8843 9.14851L12.8843 7.14851L15.7104 7.14851Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
