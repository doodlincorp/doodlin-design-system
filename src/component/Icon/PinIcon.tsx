import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IPinIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "default" | "unpin";
}

export const PinIcon: React.FC<IPinIconProps> = ({
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
            d="M12 22L13 20V17H18C18.2652 17 18.5196 16.8946 18.7071 16.7071C18.8946 16.5196 19 16.2652 19 16V14.414C19 13.888 18.786 13.372 18.414 13L17 11.586V8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7V4C18 2.897 17.103 2 16 2H8C6.897 2 6 2.897 6 4V7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8V11.586L5.586 13C5.21183 13.3756 5.00121 13.8838 5 14.414V16C5 16.2652 5.10536 16.5196 5.29289 16.7071C5.48043 16.8946 5.73478 17 6 17H11V20L12 22ZM8 4H16V6H8V4ZM7 14.414L8.707 12.707C8.80004 12.6143 8.87383 12.5041 8.92412 12.3828C8.9744 12.2614 9.00019 12.1313 9 12V8H15V12C15 12.266 15.105 12.52 15.293 12.707L17 14.414V15H7V14.414Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "unpin" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.55433 1.84009L3 3.39442L19.9706 20.365L21.5249 18.8106L18.9674 16.2532C18.9889 16.1712 19 16.0862 19 16V14.414C19 13.888 18.786 13.372 18.414 13L17 11.586V8.00001C17.2652 8.00001 17.5196 7.89465 17.7071 7.70711C17.8946 7.51958 18 7.26522 18 7.00001V4.00001C18 2.89701 17.103 2.00001 16 2.00001H8C7.1122 2.00001 6.35786 2.58113 6.0973 3.38306L4.55433 1.84009ZM8.71425 6.00001L8 5.28576V4.00001H16V6.00001H8.71425ZM10.7142 8.00001L15.0622 12.348C15.0214 12.2378 15 12.1201 15 12V8.00001H10.7142ZM12 22L13 20V17H14.1716L12.1716 15H7V14.414L8.707 12.707C8.80004 12.6143 8.87383 12.5041 8.92412 12.3828C8.9744 12.2614 9.00019 12.1313 9 12V11.8284L7 9.82844V11.586L5.586 13C5.21183 13.3756 5.00121 13.8838 5 14.414V16C5 16.2652 5.10536 16.5196 5.29289 16.7071C5.48043 16.8946 5.73478 17 6 17H11V20L12 22Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
