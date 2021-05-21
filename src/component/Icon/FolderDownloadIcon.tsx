import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IFolderDownloadIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const FolderDownloadIcon: React.FC<IFolderDownloadIconProps> = ({
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
          id="icon__stroke"
          d="M14.4237 3.89165C14.8966 3.89165 15.2119 4.28574 15.2119 4.67984V13.1134C15.2119 13.5864 14.8178 13.9016 14.4237 13.9016H1.57627C1.10336 13.9016 0.788086 13.5075 0.788086 13.1134V5.70448V3.89165V2.78819C0.788086 2.31527 1.18218 2 1.57627 2H6.85713C7.09358 2 7.25122 2.07882 7.40886 2.23646L9.06405 3.89165H14.4237Z"
          stroke={color ? colorMap[color] : colorMap.gray_8}
          strokeMiterlimit="10"
        />
        <path
          id="icon__fill"
          d="M8.90643 9.17258V5.62573H7.17242V9.17258H5.04431L8.03942 12.4041L10.9557 9.17258H8.90643Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </div>
  );
};
