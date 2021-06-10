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
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M8.00008 6.66675C7.26675 6.66675 6.66675 7.26675 6.66675 8.00008C6.66675 8.73341 7.26675 9.33341 8.00008 9.33341C8.73341 9.33341 9.33341 8.73341 9.33341 8.00008C9.33341 7.26675 8.73341 6.66675 8.00008 6.66675ZM8.00008 2.66675C7.26675 2.66675 6.66675 3.26675 6.66675 4.00008C6.66675 4.73341 7.26675 5.33341 8.00008 5.33341C8.73341 5.33341 9.33341 4.73341 9.33341 4.00008C9.33341 3.26675 8.73341 2.66675 8.00008 2.66675ZM8.00008 10.6667C7.26675 10.6667 6.66675 11.2667 6.66675 12.0001C6.66675 12.7334 7.26675 13.3334 8.00008 13.3334C8.73341 13.3334 9.33341 12.7334 9.33341 12.0001C9.33341 11.2667 8.73341 10.6667 8.00008 10.6667Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
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
