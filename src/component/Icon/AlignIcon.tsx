import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IAlignIconProps {
  color?: keyof IColorMap;
  className?: string;
  vertical?: boolean;
}

export const AlignIcon: React.FC<IAlignIconProps> = ({
  color,
  className,
  vertical,
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
      {vertical ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="align-icon__color"
            d="M14.2 2H1.8C1.36 2 1 2.36 1 2.8V3.6V8.6V9.2V9.4C1 9.84 1.36 10.2 1.8 10.2H5.15V14.2C5.15 14.64 5.51 15 5.95 15H6.68H6.75H9.31H10.11C10.55 15 10.91 14.64 10.91 14.2V12.2H13.4H14.2C14.64 12.2 15 11.84 15 11.4V3.6V2.8C15 2.36 14.64 2 14.2 2ZM2.6 8.6V3.6H5.15V8.6H2.6ZM9.31 13.4H6.75V3.6H9.31V13.4ZM13.4 10.6H10.91V3.6H13.4V10.6Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="align-icon__color"
            d="M13.6105 0.399902H2.38953C1.06913 0.399902 0 1.46903 0 2.78943V9.20668C0 10.5271 1.06913 11.5962 2.38953 11.5962H13.608C14.9284 11.5962 15.9975 10.5271 15.9975 9.20668V2.78943C16 1.46903 14.9309 0.399902 13.6105 0.399902ZM5.55258 3.65902V1.87796H13.6105C14.113 1.87796 14.5219 2.28689 14.5219 2.78943V3.65656H5.55258V3.65902ZM1.47806 3.65902V2.78943C1.47806 2.28689 1.88699 1.87796 2.38953 1.87796H4.07206V3.65902H1.47806ZM5.55258 6.84178V5.13708H14.5244V6.84178H5.55258ZM1.47806 6.84178V5.13708H4.07452V6.84178H1.47806ZM5.55258 10.1206V8.31984H14.5244V9.20914C14.5244 9.71168 14.1155 10.1206 13.6129 10.1206H5.55258ZM2.38953 10.1206C1.88699 10.1206 1.47806 9.71168 1.47806 9.20914V8.31984H4.07452V10.1206H2.38953Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
        </svg>
      )}
    </div>
  );
};
