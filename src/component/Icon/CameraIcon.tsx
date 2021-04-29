import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface ICameraIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const CameraIcon: React.FC<ICameraIconProps> = ({
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
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8">
          <path
            id="icon__fill"
            d="M8.21832 11.046C9.4274 10.9263 10.3105 9.84917 10.1908 8.6401C10.0712 7.43102 8.994 6.5479 7.78492 6.66758C6.57585 6.78726 5.69272 7.86442 5.8124 9.0735C5.93208 10.2826 7.00925 11.1657 8.21832 11.046Z"
            fill={color ? colorMap[color] : colorMap.white}
          />
          <path
            id="icon__fill"
            d="M13.5776 3.80838H11.1376C11.1376 3.80838 10.9136 2.08838 9.60163 2.08838C8.40963 2.08838 8.00163 2.08838 8.00163 2.08838C8.00163 2.08838 7.59363 2.08838 6.40163 2.08838C5.08963 2.08838 4.86563 3.80838 4.86563 3.80838H2.42562C1.78562 3.80838 1.26562 4.32838 1.26562 4.96838V12.7444C1.26562 13.3844 1.78562 13.9044 2.42562 13.9044H13.5776C14.2176 13.9044 14.7376 13.3844 14.7376 12.7444V4.96838C14.7376 4.32838 14.2176 3.80838 13.5776 3.80838ZM8.00163 12.1044C6.21763 12.1044 4.76163 10.6484 4.76163 8.86438C4.76163 7.08038 6.21763 5.61638 8.00163 5.61638C9.78563 5.61638 11.2416 7.07238 11.2416 8.85638C11.2416 10.6404 9.78563 12.1044 8.00163 12.1044Z"
            fill={color ? colorMap[color] : colorMap.white}
          />
        </g>
      </svg>
    </div>
  );
};
