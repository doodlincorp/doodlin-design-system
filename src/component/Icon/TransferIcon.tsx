import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ITransferIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const TransferIcon: React.FC<ITransferIconProps> = ({
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
          d="M19.924 10.383C19.9997 10.2002 20.0195 9.99907 19.9809 9.80505C19.9422 9.61102 19.8469 9.43281 19.707 9.29297L14.707 4.29297L13.293 5.70697L16.586 8.99997H3.99999V11H19C19.1978 11 19.3911 10.9414 19.5556 10.8316C19.72 10.7218 19.8482 10.5657 19.924 10.383V10.383ZM4.07599 13.617C4.00029 13.7997 3.9805 14.0009 4.01912 14.1949C4.05775 14.3889 4.15306 14.5671 4.29299 14.707L9.29299 19.707L10.707 18.293L7.41399 15H20V13H4.99999C4.8022 12.9998 4.6088 13.0583 4.44431 13.1682C4.27981 13.278 4.15163 13.4342 4.07599 13.617V13.617Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
