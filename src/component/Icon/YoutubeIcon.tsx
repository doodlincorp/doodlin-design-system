import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IYoutubeIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const YoutubeIcon: React.FC<IYoutubeIconProps> = ({
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
          d="M21.593 7.20301C21.4791 6.78041 21.2565 6.39501 20.9474 6.08518C20.6383 5.77534 20.2534 5.55187 19.831 5.43701C18.265 5.00701 12 5.00001 12 5.00001C12 5.00001 5.73602 4.99301 4.16902 5.40401C3.74695 5.52415 3.36285 5.75078 3.05359 6.06214C2.74433 6.3735 2.52031 6.75913 2.40302 7.18201C1.99002 8.74801 1.98602 11.996 1.98602 11.996C1.98602 11.996 1.98202 15.26 2.39202 16.81C2.62202 17.667 3.29702 18.344 4.15502 18.575C5.73702 19.005 11.985 19.012 11.985 19.012C11.985 19.012 18.25 19.019 19.816 18.609C20.2385 18.4943 20.6238 18.2714 20.9337 17.9622C21.2436 17.653 21.4674 17.2682 21.583 16.846C21.997 15.281 22 12.034 22 12.034C22 12.034 22.02 8.76901 21.593 7.20301ZM9.99603 15.005L10.001 9.00501L15.208 12.01L9.99603 15.005Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
