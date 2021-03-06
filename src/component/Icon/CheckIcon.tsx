import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICheckIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;

  variant?: "single" | "double";
}

export const CheckIcon: React.FC<ICheckIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,

  variant = "single",
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
      {variant === "single" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.4797 6.23894C18.0439 6.64461 18.1686 7.42565 17.7583 7.98344L11.5513 16.4214C11.0377 17.1196 10.0146 17.1989 9.39718 16.5885L6.36997 13.5956C5.87668 13.1079 5.87668 12.3172 6.36997 11.8295C6.86326 11.3418 7.66304 11.3418 8.15633 11.8295L10.2689 13.9181L15.7152 6.51439C16.1255 5.9566 16.9155 5.83328 17.4797 6.23894Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "double" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.414 9L9.707 12.293L18 4L19.414 5.414L9.707 15.121L5 10.414L6.414 9ZM6.414 14L9.707 17.293L18 9L19.414 10.414L9.707 20.121L5 15.414L6.414 14Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
