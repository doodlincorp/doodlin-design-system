import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IEllipsisIconProps {
  color?: keyof IColorMap;
  className?: string;
  vertical?: boolean;
}

export const EllipsisIcon: React.FC<IEllipsisIconProps> = ({
  color,
  className,
  vertical,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {vertical ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="16"
          viewBox="0 0 4 16"
        >
          <g
            id="그룹_4399"
            data-name="그룹 4399"
            transform="translate(-1672 -430)"
          >
            <circle
              id="icon__fill"
              data-name="타원 252"
              cx="2"
              cy="2"
              r="2"
              transform="translate(1672 430)"
              fill={color ? colorMap[color] : colorMap.gray_6}
            />
            <circle
              id="icon__fill"
              data-name="타원 253"
              cx="2"
              cy="2"
              r="2"
              transform="translate(1672 436)"
              fill={color ? colorMap[color] : colorMap.gray_6}
            />
            <circle
              id="icon__fill"
              data-name="타원 254"
              cx="2"
              cy="2"
              r="2"
              transform="translate(1672 442)"
              fill={color ? colorMap[color] : colorMap.gray_6}
            />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="4"
          viewBox="0 0 16 4"
        >
          <g
            id="그룹_4399"
            data-name="그룹 4399"
            transform="translate(446 -1672) rotate(90)"
          >
            <circle
              id="icon__fill"
              data-name="타원 252"
              cx="2"
              cy="2"
              r="2"
              transform="translate(1672 430)"
              fill={color ? colorMap[color] : colorMap.gray_6}
            />
            <circle
              id="icon__fill"
              data-name="타원 253"
              cx="2"
              cy="2"
              r="2"
              transform="translate(1672 436)"
              fill={color ? colorMap[color] : colorMap.gray_6}
            />
            <circle
              id="icon__fill"
              data-name="타원 254"
              cx="2"
              cy="2"
              r="2"
              transform="translate(1672 442)"
              fill={color ? colorMap[color] : colorMap.gray_6}
            />
          </g>
        </svg>
      )}
    </div>
  );
};
