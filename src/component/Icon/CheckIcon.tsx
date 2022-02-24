import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";
import { colorMap } from ".";

export interface ICheckIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;

  variant?: "single" | "double" | "circle" | "alt" | "circle-ghost";
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
            fillRule="evenodd"
            clipRule="evenodd"
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

      {variant === "circle" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7986 9.15286C17.1405 8.68804 17.0366 8.03717 16.5664 7.69912C16.0963 7.36106 15.4379 7.46383 15.096 7.92866L10.5574 14.0984L8.79694 12.3579C8.38587 11.9515 7.71938 11.9515 7.30831 12.3579C6.89723 12.7643 6.89723 13.4232 7.30831 13.8296L9.83098 16.3237C10.3455 16.8324 11.1981 16.7663 11.626 16.1845L16.7986 9.15286Z"
            fill={color || EColorMap.green}
          />
        </svg>
      )}

      {variant == "alt" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M3 12.3021L3.70651 10.791C5.76449 12.2235 7.7049 13.8238 9.50859 15.5762C12.1165 11.4346 15.1093 7.55809 18.4457 4L20 4.62963C20 4.62963 13.8182 12.8958 10.2327 21C10.2327 21 6.02026 15.4323 3 12.3021Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "circle-ghost" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill={color || EColorMap.gray_8}
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5664 7.6955C17.0366 8.02741 17.1405 8.66644 16.7986 9.12281L11.626 16.0266C11.1981 16.5978 10.3455 16.6627 9.83098 16.1633L7.30831 13.7146C6.89723 13.3155 6.89723 12.6686 7.30831 12.2696C7.71938 11.8705 8.38587 11.8705 8.79694 12.2696L10.5574 13.9785L15.096 7.92086C15.4379 7.46449 16.0963 7.36359 16.5664 7.6955Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
