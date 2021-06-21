import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface ISliderIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const SliderIcon: React.FC<ISliderIconProps> = ({
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
          d="M9.5 2.5C11.08 2.5 12.403 3.56 12.837 5H22.125V7H12.837C12.403 8.44 11.08 9.5 9.5 9.5C7.92 9.5 6.597 8.44 6.163 7H2V5H6.163C6.597 3.56 7.92 2.5 9.5 2.5ZM8 6C8 6.827 8.673 7.5 9.5 7.5C10.327 7.5 11 6.827 11 6C11 5.173 10.327 4.5 9.5 4.5C8.673 4.5 8 5.173 8 6ZM4.163 17C4.597 15.56 5.92 14.5 7.5 14.5C9.08 14.5 10.403 15.56 10.837 17H22V19H10.837C10.403 20.44 9.08 21.5 7.5 21.5C5.92 21.5 4.597 20.44 4.163 19H2V17H4.163ZM6 18C6 18.827 6.673 19.5 7.5 19.5C8.327 19.5 9 18.827 9 18C9 17.173 8.327 16.5 7.5 16.5C6.673 16.5 6 17.173 6 18ZM13.163 11C13.597 9.56 14.92 8.5 16.5 8.5C18.08 8.5 19.403 9.56 19.837 11H22V13H19.837C19.403 14.44 18.08 15.5 16.5 15.5C14.92 15.5 13.597 14.44 13.163 13H2V11H13.163ZM15 12C15 12.827 15.673 13.5 16.5 13.5C17.327 13.5 18 12.827 18 12C18 11.173 17.327 10.5 16.5 10.5C15.673 10.5 15 11.173 15 12Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
