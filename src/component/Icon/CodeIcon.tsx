import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICodeIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const CodeIcon: React.FC<ICodeIconProps> = ({
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
          d="M7.37498 16.781L8.62498 15.219L4.60098 12L8.62498 8.78098L7.37498 7.21898L2.37498 11.219C2.25783 11.3127 2.16325 11.4315 2.09825 11.5667C2.03326 11.7019 1.99951 11.85 1.99951 12C1.99951 12.15 2.03326 12.2981 2.09825 12.4333C2.16325 12.5685 2.25783 12.6873 2.37498 12.781L7.37498 16.781ZM16.625 7.21898L15.375 8.78098L19.399 12L15.375 15.219L16.625 16.781L21.625 12.781C21.7421 12.6873 21.8367 12.5685 21.9017 12.4333C21.9667 12.2981 22.0005 12.15 22.0005 12C22.0005 11.85 21.9667 11.7019 21.9017 11.5667C21.8367 11.4315 21.7421 11.3127 21.625 11.219L16.625 7.21898ZM14.976 3.21598L10.976 21.216L9.02298 20.782L13.023 2.78198L14.976 3.21598Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
