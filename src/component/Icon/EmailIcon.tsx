import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IEmailIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?: "solid" | "border";
}

export const EmailIcon: React.FC<IEmailIconProps> = ({
  color,
  className,
  variant = "solid",
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
      {variant === "solid" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M13.02 2.13989H2.98C1.89 2.13989 1 3.02989 1 4.12989V11.8799C1 12.9699 1.89 13.8599 2.98 13.8599H13.02C14.11 13.8599 15 12.9699 15 11.8799V4.12989C15 3.02989 14.11 2.13989 13.02 2.13989ZM14.04 6.08989L9.08 9.48989C8.76 9.70989 8.38 9.82989 8 9.82989C7.62 9.82989 7.24 9.71989 6.92 9.49989L1.96 6.09989V4.44989L7.68 8.36989C7.87 8.49989 8.13 8.49989 8.32 8.36989L14.04 4.44989V6.08989Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M13.02 2.13989H2.98C1.89 2.13989 1 3.02989 1 4.12989V11.8799C1 12.9699 1.89 13.8599 2.98 13.8599H13.02C14.11 13.8599 15 12.9699 15 11.8799V4.12989C15 3.02989 14.11 2.13989 13.02 2.13989ZM2.98 3.48989H13.02C13.37 3.48989 13.65 3.76989 13.65 4.11989V4.71989L8.32 8.37989C8.13 8.50989 7.87 8.50989 7.68 8.37989L2.35 4.71989V4.11989C2.35 3.77989 2.63 3.48989 2.98 3.48989ZM13.02 12.5099H2.98C2.63 12.5099 2.35 12.2299 2.35 11.8799V6.35989L6.92 9.48989C7.24 9.70989 7.62 9.82989 8 9.82989C8.38 9.82989 8.76 9.71989 9.08 9.49989L13.65 6.36989V11.8799C13.65 12.2199 13.37 12.5099 13.02 12.5099Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
        </svg>
      )}
    </div>
  );
};
