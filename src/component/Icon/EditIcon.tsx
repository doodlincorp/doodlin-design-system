import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IEditIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const EditIcon: React.FC<IEditIconProps> = ({ color, className }) => {
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
          id="icon__fill"
          d="M4.98657 11.3718L8.14604 11.0151L14.0703 5.43591L11.2876 2.81714L5.36531 8.39447L4.98657 11.3718Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
        <path
          id="icon__fill"
          d="M15.707 3.89479L14.5927 4.94417L11.812 2.3254L12.9263 1.27601C13.315 0.909949 13.9469 0.909949 14.3356 1.27601L15.707 2.56757C16.0957 2.93363 16.0957 3.52872 15.707 3.89479Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
        <path
          id="icon__fill"
          d="M10.9668 9.99207V12.4963H2.59468V4.04868H8.44319C8.65449 4.04868 8.85781 3.96984 9.00731 3.82904L9.96013 2.93171C10.1116 2.78904 10.004 2.54688 9.7907 2.54688H2.27774C1.57209 2.54875 1 3.08752 1 3.75207V12.7948C1 13.4594 1.57209 13.9981 2.27774 13.9981H11.2817C11.9874 13.9981 12.5595 13.4594 12.5595 12.7948V8.72305C12.5595 8.52218 12.3023 8.42269 12.1508 8.56348L11.198 9.46081C11.0505 9.60161 10.9668 9.79309 10.9668 9.99207Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
      </svg>
    </div>
  );
};
