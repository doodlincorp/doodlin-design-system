import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICalendarIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;

  variant?:
    | "default"
    | "check"
    | "request"
    | "change-request"
    | "scheduled"
    | "finish"
    | "x"
    | "edit";
}

export const CalendarIcon: React.FC<ICalendarIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,

  variant = "default",
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
      {variant === "default" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 22H5C3.897 22 3 21.103 3 20V8V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4H19C20.103 4 21 4.897 21 6V8V20C21 21.103 20.103 22 19 22ZM19.001 20L19 8H5V20H19.001ZM9 11H7V13H9V11ZM9 15H7V17H9V15ZM13 11H11V13H13V11ZM13 15H11V17H13V15ZM17 11H15V13H17V11ZM17 15H15V17H17V15Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "check" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 4H19C20.103 4 21 4.897 21 6V8V20C21 21.103 20.103 22 19 22H5C3.897 22 3 21.103 3 20V8V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4ZM5 20H19.002L19 8H5V20ZM16.707 11.707L11 17.414L7.293 13.707L8.707 12.293L11 14.586L15.293 10.293L16.707 11.707Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "request" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H7V2H9V4H15V2H17V4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20ZM5 8V20H19V8H5ZM8.84417 10.2896L15.9275 13.6229C15.9991 13.6565 16.0596 13.7099 16.102 13.7766C16.1444 13.8434 16.1669 13.9209 16.1669 14C16.1669 14.0791 16.1444 14.1565 16.102 14.2233C16.0596 14.2901 15.9991 14.3434 15.9275 14.3771L8.84417 17.7104C8.77286 17.7443 8.69336 17.7572 8.61497 17.7476C8.53659 17.738 8.46256 17.7063 8.40154 17.6562C8.34053 17.606 8.29505 17.5396 8.27042 17.4645C8.2458 17.3895 8.24305 17.309 8.2625 17.2325L8.7675 15.2121L12 14L8.7675 12.7879L8.2625 10.7675C8.24341 10.691 8.24641 10.6107 8.27115 10.5358C8.29589 10.461 8.34135 10.3947 8.40225 10.3446C8.46316 10.2946 8.53701 10.2629 8.61524 10.2531C8.69346 10.2434 8.77284 10.256 8.84417 10.2896Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "change-request" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 4H19C20.103 4 21 4.897 21 6V20C21 21.103 20.103 22 19 22H5C3.897 22 3 21.103 3 20V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4ZM5 20H19.002L19 8H5V20ZM13 10H11V15H13V10ZM13 16H11V18H13V16Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "scheduled" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 4H19C20.103 4 21 4.897 21 6V20C21 21.103 20.103 22 19 22H5C3.897 22 3 21.103 3 20V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4ZM5 20H19.001L19 8H5V20ZM17 12H11V18H17V12Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "finish" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 4H19C20.103 4 21 4.897 21 6V8V20C21 21.103 20.103 22 19 22H5C3.897 22 3 21.103 3 20V8V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4ZM5 20H19.002L19 8H5V20ZM16.707 11.707L11 17.414L7.293 13.707L8.707 12.293L11 14.586L15.293 10.293L16.707 11.707Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "x" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 4H19C20.103 4 21 4.897 21 6V8V20C21 21.103 20.103 22 19 22H5C3.897 22 3 21.103 3 20V8V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4ZM5 20H19.002L19 8H5V20ZM9.707 17.707L8.293 16.293L10.586 14L8.293 11.707L9.707 10.293L12 12.586L14.293 10.293L15.707 11.707L13.414 14L15.707 16.293L14.293 17.707L12 15.414L9.707 17.707Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "edit" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 4H19C20.103 4 21 4.897 21 6V20C21 21.103 20.103 22 19 22H5C3.897 22 3 21.103 3 20V6C3 4.897 3.897 4 5 4H8V2H10V4H14V2H16V4ZM5 7V20H19.002L19 6V7H5ZM13.828 10.384L15.628 12.183L16.998 10.812L15.198 9.013L13.828 10.384ZM8.005 18V16.201L12.981 11.231L14.78 13.03L9.804 18H8.005Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
