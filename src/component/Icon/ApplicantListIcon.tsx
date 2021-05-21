import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IApplicantListIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const ApplicantListIcon: React.FC<IApplicantListIconProps> = ({
  color,
  className,
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
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="icon__fill"
          d="M4.19421 8.12962C5.64442 8.12962 6.82005 6.95399 6.82005 5.50378C6.82005 4.05356 5.64442 2.87793 4.19421 2.87793C2.74399 2.87793 1.56836 4.05356 1.56836 5.50378C1.56836 6.95399 2.74399 8.12962 4.19421 8.12962Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          d="M8.44033 12.178C8.21896 10.9016 7.37586 8.75146 4.2272 8.75146C1.07854 8.75146 0.233087 10.9016 0.011715 12.178C-0.0730657 12.6608 0.313157 13.0988 0.819487 13.0988H4.2272H7.63491C8.13653 13.0988 8.52275 12.6608 8.44033 12.178Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          d="M15.4997 4.17529H10.2354C9.95921 4.17529 9.73535 4.39915 9.73535 4.67529V5.49337C9.73535 5.76951 9.95921 5.99337 10.2354 5.99337H15.4997C15.7758 5.99337 15.9997 5.76951 15.9997 5.49337V4.67529C15.9997 4.39915 15.7758 4.17529 15.4997 4.17529Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          d="M15.4997 7.52881H10.2354C9.95921 7.52881 9.73535 7.75267 9.73535 8.02881V8.84688C9.73535 9.12302 9.95921 9.34688 10.2354 9.34688H15.4997C15.7758 9.34688 15.9997 9.12302 15.9997 8.84688V8.02881C15.9997 7.75267 15.7758 7.52881 15.4997 7.52881Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          d="M14.4423 10.8804H10.2354C9.95921 10.8804 9.73535 11.1042 9.73535 11.3804V12.1984C9.73535 12.4746 9.95921 12.6984 10.2354 12.6984H14.4423C14.7184 12.6984 14.9423 12.4746 14.9423 12.1984V11.3804C14.9423 11.1042 14.7184 10.8804 14.4423 10.8804Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
      </svg>
    </div>
  );
};
