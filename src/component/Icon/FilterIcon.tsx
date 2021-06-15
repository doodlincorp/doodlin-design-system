import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IFilterIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const FilterIcon: React.FC<IFilterIconProps> = ({
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
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.62607 5H15.3514C15.9008 5 16.1865 5.72528 15.7909 6.15385L11.0766 11.2088V18.3407C11.0766 18.8791 10.5052 19.1868 10.1096 18.8682L8.1975 17.3627C8.01069 17.2198 7.9008 16.989 7.9008 16.7363V11.2088L3.18651 6.15385C2.7909 5.72528 3.06563 5 3.62607 5ZM14.0549 12.5276H19.5274C19.8351 12.5276 20.0769 12.2748 20.0769 11.9672V11.4287C20.0769 11.121 19.8351 10.8792 19.5274 10.8792H14.0549C13.7472 10.8792 13.5054 11.121 13.5054 11.4287V11.9781C13.5054 12.2858 13.7472 12.5276 14.0549 12.5276ZM17.8899 15.264H14.0657C13.7581 15.264 13.5163 15.0222 13.5163 14.7145V14.176C13.5163 13.8683 13.7581 13.6266 14.0657 13.6266H17.8899C18.1976 13.6266 18.4394 13.8683 18.4394 14.176V14.7145C18.4394 15.0222 18.1866 15.264 17.8899 15.264ZM14.055 18.0002H16.2418C16.5495 18.0002 16.7913 17.7584 16.7913 17.4507V16.9123C16.7913 16.6046 16.5495 16.3628 16.2418 16.3628H14.055C13.7473 16.3628 13.5056 16.6046 13.5056 16.9123V17.4507C13.5056 17.7584 13.7473 18.0002 14.055 18.0002Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
