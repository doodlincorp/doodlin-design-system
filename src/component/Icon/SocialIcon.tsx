import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ISocialIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "linkedin" | "facebook" | "kakaotalk" | "twitter";
}

export const SocialIcon: React.FC<ISocialIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "linkedin",
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
      {variant === "linkedin" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3ZM8.339 18.337H5.667V9.747H8.339V18.337ZM7.003 8.574C6.59244 8.574 6.1987 8.41091 5.9084 8.1206C5.61809 7.8303 5.455 7.43655 5.455 7.026C5.455 6.61544 5.61809 6.22171 5.9084 5.9314C6.1987 5.64109 6.59244 5.478 7.003 5.478C7.41356 5.478 7.80729 5.64109 8.0976 5.9314C8.38791 6.22171 8.551 6.61544 8.551 7.026C8.551 7.43655 8.38791 7.8303 8.0976 8.1206C7.80729 8.41091 7.41356 8.574 7.003 8.574ZM18.338 18.337H15.669V14.16C15.669 13.164 15.651 11.883 14.281 11.883C12.891 11.883 12.68 12.969 12.68 14.09V18.338H10.013V9.748H12.573V10.922H12.61C12.965 10.247 13.837 9.535 15.134 9.535C17.838 9.535 18.337 11.313 18.337 13.627V18.337H18.338Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "facebook" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H12.615V14.04H10.277V11.315H12.615V9.315C12.615 6.99 14.035 5.723 16.115 5.723C16.814 5.721 17.514 5.757 18.21 5.83V8.25H16.775C15.647 8.25 15.427 8.788 15.427 9.575V11.31H18.124L17.774 14.035H15.426V21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "kakaotalk" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 10.7179C2 6.3556 6.47776 2.81593 11.999 2.81593C17.5202 2.81593 22 6.35762 22 10.7199C22 15.0822 17.5222 18.6218 12.001 18.6218C11.3798 18.6215 10.7595 18.5755 10.1451 18.4841L6.29541 21.0998C6.07861 21.2457 5.74024 21.2518 5.876 20.7088C5.92404 20.5236 6.05417 20.036 6.20292 19.4787C6.39921 18.7433 6.62792 17.8864 6.74318 17.4426C3.89646 16.0486 2 13.5545 2 10.7179ZM6.0543 12.7582C6.0543 13.2323 7.12208 13.2384 7.12208 12.7582L7.13018 9.31781H8.15338C8.79364 9.31781 8.79364 8.30474 8.15338 8.30474C7.4341 8.30474 5.02502 8.28448 5.02502 8.28448C4.41718 8.28651 4.41718 9.27121 5.02502 9.27121H6.0543V12.7582ZM10.8725 12.1909C10.8725 12.1909 10.8076 12.2192 11.0568 12.8798C11.2594 13.4126 12.2381 13.0439 12.0375 12.5151C11.951 12.2871 11.8013 11.8826 11.6288 11.4169C11.2233 10.3217 10.6924 8.88769 10.5645 8.61474C10.4814 8.43441 10.1795 8.30474 9.88775 8.30474C9.77173 8.29429 9.6552 8.31809 9.55256 8.37318C9.44993 8.42828 9.3657 8.51227 9.3103 8.61474C9.17834 8.90049 8.87426 9.73243 8.56831 10.5695C8.27768 11.3646 7.98536 12.1644 7.8373 12.5049C7.61848 13.0034 8.56468 13.4147 8.78553 12.9101L8.98815 12.1909H10.8725ZM12.8094 13.1148H14.8761C15.3583 13.1148 15.3563 12.1017 14.8822 12.0774H13.5166V8.76062C13.4954 8.62837 13.4278 8.50799 13.3258 8.42109C13.2239 8.33419 13.0943 8.28645 12.9604 8.28645C12.8264 8.28645 12.6969 8.33419 12.595 8.42109C12.493 8.50799 12.4254 8.62837 12.4042 8.76062V12.5414C12.4042 12.5414 12.3171 13.1148 12.8094 13.1148ZM16.8435 11.1839L18.199 13.0358V13.0419C18.4745 13.4025 19.3377 12.7481 19.0621 12.3813L17.6215 10.4828C17.6215 10.4828 18.6001 9.42519 18.9851 9.04225C19.21 8.81938 18.513 8.11834 18.2881 8.34121L16.5396 10.0918C16.5396 10.0918 16.5537 9.12938 16.5396 8.59651C16.5335 8.39389 16.3025 8.29664 16.031 8.29664C15.7595 8.29664 15.488 8.40807 15.488 8.62487C15.4956 8.91958 15.485 10.9877 15.4792 12.1153C15.4772 12.4916 15.4758 12.7632 15.4758 12.8291C15.4758 13.2445 16.5315 13.2445 16.5315 12.8291V11.4331L16.8435 11.1839ZM10.5219 11.2426H9.32854L9.94853 9.44748L10.5219 11.2426Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "twitter" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M19.633 7.997C19.646 8.172 19.646 8.346 19.646 8.52C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.78599 18.2264 6.54765 17.6201 7.974 16.501C7.13342 16.4858 6.31858 16.2085 5.64324 15.7077C4.9679 15.207 4.46578 14.5079 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C5.11676 13.4488 4.29647 12.9543 3.70762 12.2337C3.11876 11.513 2.79769 10.6106 2.799 9.68V9.63C3.336 9.929 3.959 10.116 4.619 10.141C4.06609 9.77358 3.61272 9.27502 3.29934 8.68979C2.98596 8.10456 2.82231 7.45085 2.823 6.787C2.823 6.039 3.022 5.353 3.371 4.755C4.38314 6.00002 5.6455 7.01856 7.07634 7.74466C8.50717 8.47075 10.0746 8.88821 11.677 8.97C11.615 8.67 11.577 8.359 11.577 8.047C11.5767 7.51796 11.6807 6.99406 11.8831 6.50524C12.0854 6.01642 12.3821 5.57227 12.7562 5.19819C13.1303 4.8241 13.5744 4.52741 14.0632 4.32508C14.5521 4.12274 15.076 4.01873 15.605 4.019C16.765 4.019 17.812 4.505 18.548 5.291C19.4498 5.11661 20.3145 4.78742 21.104 4.318C20.8034 5.24881 20.1738 6.0381 19.333 6.538C20.1328 6.44678 20.9144 6.23645 21.652 5.914C21.1011 6.7171 20.4185 7.42134 19.633 7.997V7.997Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
