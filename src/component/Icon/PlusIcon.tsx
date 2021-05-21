import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IPlusIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?: "circle" | "square" | "none";
}

export const PlusIcon: React.FC<IPlusIconProps> = ({
  color,
  className,
  variant = "none",
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
      {variant === "circle" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <g id="그룹_586" data-name="그룹 586" transform="translate(0 0.076)">
            <g
              id="icon__stroke"
              data-name="사각형 680"
              transform="translate(0 -0.076)"
              fill="none"
              stroke={color ? colorMap[color] : colorMap.gray_6}
              strokeWidth="1"
            >
              <rect width="18" height="18" rx="9" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="17"
                height="17"
                rx="8.5"
                fill="none"
              />
            </g>
            <g id="그룹_585" data-name="그룹 585" transform="translate(4 4)">
              <rect
                id="icon__fill"
                data-name="사각형 707"
                width="2"
                height="10"
                transform="translate(4 -0.076)"
                fill={color ? colorMap[color] : colorMap.gray_6}
              />
              <rect
                id="icon__fill"
                data-name="사각형 708"
                width="2"
                height="10"
                transform="translate(0 5.924) rotate(-90)"
                fill={color ? colorMap[color] : colorMap.gray_6}
              />
            </g>
          </g>
        </svg>
      ) : variant === "none" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <g
            id="그룹_3233"
            data-name="그룹 3233"
            transform="translate(-1673 -102)"
          >
            <rect
              id="사각형_2177"
              data-name="사각형 2177"
              width="16"
              height="16"
              transform="translate(1673 102)"
              fill="none"
            />
            <path
              id="icon__fill"
              data-name="합치기 19"
              d="M-14197,12954v-4h-4v-2h4v-4h2v4h4v2h-4v4Z"
              transform="translate(15877 -12839)"
              fill={color ? colorMap[color] : colorMap.gray_6}
            />
          </g>
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            id="icon__stroke"
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            stroke={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.66665 4.66602H7.3332V7.33301H4.66602V8.66645H7.3332V11.3332H8.66665V8.66645H11.3332V7.33301H8.66665V4.66602Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
    </div>
  );
};
