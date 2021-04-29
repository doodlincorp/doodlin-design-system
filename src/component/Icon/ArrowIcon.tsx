import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IArrowIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?: "border" | "solid";
}

export const ArrowIcon: React.FC<IArrowIconProps> = ({
  color,
  className,
  variant = "border",
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {variant === "border" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            id="그룹_2915"
            data-name="그룹 2915"
            transform="translate(-468 -274)"
          >
            <rect
              id="사각형_1871"
              data-name="사각형 1871"
              width="24"
              height="24"
              transform="translate(468 274)"
              fill="none"
              opacity="0.4"
            />
            <path
              id="arrow-right__color"
              data-name="패스 1179"
              d="M481.707,279.293l-1.414,1.414L484.586,285H472v2h12.586l-4.293,4.293,1.414,1.414L488.414,286Z"
              fill={color ? colorMap[color] : colorMap.blue_7}
            />
          </g>
        </svg>
      )}
      {variant === "solid" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2813 6.50932C11.0052 6.50932 10.7813 6.28546 10.7813 6.00932V2.5C10.7813 2.22386 10.5574 2 10.2813 2H5.71435C5.43821 2 5.21435 2.22386 5.21435 2.5V6.00932C5.21435 6.28546 4.99049 6.50932 4.71435 6.50932H2.15134C1.71404 6.50932 1.48745 7.03109 1.78597 7.35065L7.63257 13.609C7.83017 13.8205 8.16554 13.8206 8.3632 13.6091L14.2134 7.35076C14.5121 7.03125 14.2855 6.50932 13.8482 6.50932H11.2813Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
        </svg>
      )}
    </div>
  );
};
