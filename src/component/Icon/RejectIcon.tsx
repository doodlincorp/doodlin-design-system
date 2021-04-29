import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IRejectIConProps {
  color?: keyof IColorMap;
  className?: string;
  size?: "sm" | "lg";
}

export const RejectIcon: React.FC<IRejectIConProps> = ({
  color,
  className,
  size = "sm",
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
      {size === "sm" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <g
            id="그룹_1073"
            data-name="그룹 1073"
            transform="translate(-592 -269)"
          >
            <rect
              id="사각형_1129"
              data-name="사각형 1129"
              width="16"
              height="16"
              transform="translate(592 269)"
              fill="none"
              opacity="0.4"
            />
            <path
              id="reject-icon-sm__color"
              data-name="패스 97"
              d="M600,270a7,7,0,1,0,7,7A7,7,0,0,0,600,270Zm-5,7a4.992,4.992,0,0,1,7.753-4.167l-6.92,6.92A4.969,4.969,0,0,1,595,277Zm5,5a4.968,4.968,0,0,1-2.753-.833l6.92-6.92A4.992,4.992,0,0,1,600,282Z"
              fill={color ? colorMap[color] : colorMap.gray_6}
            />
          </g>
        </svg>
      )}
      {size === "lg" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="reject-icon-lg__color"
            d="M10 2C8.41776 2 6.87104 2.46919 5.55545 3.34824C4.23986 4.22729 3.21447 5.47671 2.60897 6.93852C2.00347 8.40033 1.84504 10.0089 2.15372 11.5607C2.4624 13.1126 3.22433 14.538 4.34315 15.6569C5.46197 16.7757 6.88744 17.5376 8.43929 17.8463C9.99114 18.155 11.5997 17.9965 13.0615 17.391C14.5233 16.7855 15.7727 15.7601 16.6518 14.4445C17.5308 13.129 18 11.5822 18 10C18 7.87826 17.1572 5.84343 15.6569 4.34314C14.1566 2.84285 12.1217 2 10 2ZM3.60001 10C3.59779 8.80203 3.93239 7.62757 4.56563 6.61064C5.19887 5.59371 6.10524 4.77527 7.18131 4.24875C8.25737 3.72223 9.45977 3.50885 10.6513 3.63291C11.8428 3.75697 12.9755 4.21349 13.92 4.95039L4.95201 13.9184C4.07647 12.7999 3.60052 11.4204 3.60001 10ZM10 16.4C8.57919 16.4003 7.19919 15.9249 6.08001 15.0496L15.048 6.08159C15.7843 7.02601 16.2405 8.15837 16.3643 9.34951C16.4882 10.5406 16.2748 11.7426 15.7486 12.8183C15.2223 13.8941 14.4043 14.8002 13.3879 15.4335C12.3715 16.0668 11.1976 16.4017 10 16.4Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
        </svg>
      )}
    </div>
  );
};
