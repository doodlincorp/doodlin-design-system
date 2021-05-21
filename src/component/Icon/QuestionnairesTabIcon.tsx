import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IQuestionnairesTabIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const QuestionnairesTabIcon: React.FC<IQuestionnairesTabIconProps> = ({
  color,
  className,
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
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="icon__fill"
          d="M8.7201 10.42H6.7401C6.4601 10.42 6.2301 10.2 6.2101 9.91998C6.1001 8.08998 7.0101 7.39999 8.2001 6.71999C8.3701 6.61999 8.5201 6.47999 8.7001 6.35999C9.0101 6.14999 9.7301 5.65999 9.7701 5.35999C9.8401 4.92999 9.7601 4.57999 9.5501 4.32999C9.2501 3.97999 8.6601 3.76999 7.8801 3.75999C7.8701 3.75999 7.8501 3.75999 7.8401 3.75999C6.8401 3.75999 5.8801 4.58998 5.3601 5.15998C5.1901 5.34998 4.9101 5.37998 4.7001 5.22998L3.5001 4.36999C3.1301 4.10999 3.0801 3.58999 3.3801 3.25999C3.6001 3.01999 3.8801 2.74999 4.2101 2.46999C5.6501 1.24999 6.6801 0.979987 7.9501 1.00999C9.9901 1.04999 11.0401 1.93998 11.6701 2.56998C12.5501 3.42998 12.9401 4.66998 12.7601 5.88998C12.5301 7.36998 11.0101 8.12998 10.2601 8.63998C10.1301 8.72998 10.0101 8.80999 9.9501 8.85999C9.6501 9.09999 9.4901 9.35998 9.4301 9.79998C9.3701 10.15 9.0801 10.42 8.7201 10.42Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <path
          id="icon__fill"
          d="M7.78012 15.0001C8.79633 15.0001 9.62012 14.1763 9.62012 13.1601C9.62012 12.1439 8.79633 11.3201 7.78012 11.3201C6.76392 11.3201 5.94012 12.1439 5.94012 13.1601C5.94012 14.1763 6.76392 15.0001 7.78012 15.0001Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </div>
  );
};
