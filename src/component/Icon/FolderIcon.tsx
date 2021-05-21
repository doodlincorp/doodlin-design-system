import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IFolderIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const FolderIcon: React.FC<IFolderIconProps> = ({
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
          d="M13.62 3.76008H8.00998L6.53998 2.33008H2.37998C1.56998 2.33008 0.919983 2.98008 0.919983 3.79008V5.22008V12.2101C0.919983 12.5101 1.00998 12.7901 1.16998 13.0301C1.19998 13.0701 1.21998 13.1101 1.24998 13.1401C1.30998 13.2101 1.37998 13.2801 1.44998 13.3401C1.69998 13.5501 2.02998 13.6701 2.37998 13.6701H8.00998H13.63C14.44 13.6701 15.09 13.0201 15.09 12.2101V5.22008C15.08 4.41008 14.43 3.76008 13.62 3.76008Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
      </svg>
    </div>
  );
};
