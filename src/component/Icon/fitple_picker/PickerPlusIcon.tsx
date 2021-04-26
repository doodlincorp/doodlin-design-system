import React from "react";
import { colorMap, IColorMap } from "../colorMap";

export interface IPickerPlusIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const PickerPlusIcon: React.FC<IPickerPlusIconProps> = ({
  color,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          id="icon__stroke"
          x="0.5"
          y="0.5"
          width="15"
          height="15"
          rx="3.5"
          stroke={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.66665 4.66602H7.3332V7.33301H4.66602V8.66645H7.3332V11.3332H8.66665V8.66645H11.3332V7.33301H8.66665V4.66602Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
      </svg>
    </div>
  );
};
