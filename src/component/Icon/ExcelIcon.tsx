import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IExcelIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const ExcelIcon: React.FC<IExcelIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
}) => {
  return (
    <i
      className={cn("dds-icon", className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.75022 3.14807H20.6661C21.1084 3.14807 21.4622 3.50193 21.5507 3.94425V20.3987C21.5507 20.841 21.1969 21.1949 20.7545 21.1949H7.75022C7.3079 21.1949 6.95404 20.841 6.95404 20.3987V17.214H6.95402H2.79618C2.35386 17.214 2 16.8601 2 16.4178V7.92518C2 7.48286 2.35386 7.129 2.79618 7.129H6.95402H7.92713H9.65747C9.65572 7.12899 9.65397 7.12898 9.65221 7.12898H13.7658V4.20965H8.01562V7.12898H6.95404V3.94425C6.95404 3.50193 7.3079 3.14807 7.75022 3.14807ZM11.908 8.19056V8.19057V11.6407H13.8543V8.19056H11.908ZM11.908 12.7023V12.7023V16.1524H13.8543V12.7023H11.908ZM11.1173 17.214C11.1155 17.214 11.1137 17.214 11.1119 17.214H8.0156H7.92715V20.1333H13.7658V17.214H11.1173ZM14.6505 20.0448H20.4007V17.1255H14.6505V20.0448ZM14.6505 16.0639H20.4007V12.6138H14.6505V16.0639ZM14.6505 11.6407H20.4007V8.19056H14.6505V11.6407ZM14.6505 7.12898H20.4007V4.20965H14.6505V7.12898ZM7.92713 15.5331H9.78489L7.92713 12.2599L9.87335 8.98676H8.0156L6.95402 10.756L5.89245 8.98676H4.03469L5.98091 12.2599L4.03469 15.5331H5.80398L6.86556 13.7638L7.92713 15.5331Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
