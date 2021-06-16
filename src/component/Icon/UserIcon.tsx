import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IUserIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;

  variant?:
    | "general"
    | "manager"
    | "owner"
    | "setMember"
    | "evaluable"
    | "rejected";
}

export const UserIcon: React.FC<IUserIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,

  variant = "general",
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
      {variant === "general" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M7.5 6.5C7.5 8.981 9.519 11 12 11C14.481 11 16.5 8.981 16.5 6.5C16.5 4.019 14.481 2 12 2C9.519 2 7.5 4.019 7.5 6.5ZM20 21H21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H4H5H19H20Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}{" "}
      {variant === "manager" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4167 9.01118C10.4167 10.7276 9.1625 12.0224 7.5 12.0224C5.8375 12.0224 4.58333 10.7276 4.58333 9.01118C4.58333 7.29481 5.8375 6 7.5 6C9.1625 6 10.4167 7.29481 10.4167 9.01118ZM2.5 17.1397C2.5 14.7677 4.36917 12.838 6.66667 12.838H8.33333C10.6308 12.838 12.5 14.7677 12.5 17.1397V18H11.6667H10.8333H4.16667H3.33333H2.5V17.1397ZM21.4353 10.6784L20.8755 9.70441C20.7586 9.49988 20.5055 9.40736 20.2816 9.49014L19.7899 9.67519C19.2155 9.88946 18.5875 9.5291 18.4901 8.92525L18.4025 8.40906C18.3587 8.17044 18.1591 8 17.9205 8H16.796C16.5575 8 16.3579 8.17044 16.3189 8.40906L16.2313 8.92525C16.1291 9.5291 15.5011 9.89433 14.9315 9.67519L14.435 9.49501C14.2159 9.40736 13.9628 9.49988 13.846 9.70441L13.2861 10.6784C13.1693 10.8829 13.2131 11.1459 13.3981 11.2968L13.8021 11.6328C14.2744 12.0224 14.2744 12.748 13.8021 13.1376L13.3981 13.4736C13.2131 13.6246 13.1693 13.8875 13.2861 14.0921L13.846 15.066C13.9628 15.2705 14.2159 15.3631 14.4399 15.2803L14.9315 15.0952C15.506 14.881 16.134 15.2413 16.2313 15.8452L16.3189 16.3614C16.3579 16.5951 16.5575 16.7655 16.796 16.7655H17.9205C18.1591 16.7655 18.3635 16.5951 18.4025 16.3565L18.4901 15.8403C18.5923 15.2364 19.2203 14.8712 19.7899 15.0903L20.2816 15.2754C20.5055 15.3582 20.7538 15.2705 20.8755 15.0611L21.4353 14.0872C21.5521 13.8827 21.5083 13.6197 21.3233 13.4687L20.9193 13.1327C20.4471 12.7431 20.4471 12.0175 20.9193 11.628L21.3233 11.2919C21.5035 11.1459 21.5521 10.8829 21.4353 10.6784ZM18.8216 12.3828C18.8216 13.1896 18.1676 13.8437 17.3607 13.8437C16.5539 13.8437 15.8998 13.1896 15.8998 12.3828C15.8998 11.5759 16.5539 10.9218 17.3607 10.9218C18.1676 10.9218 18.8216 11.5759 18.8216 12.3828Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
      {variant === "owner" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9167 9.01118C11.9167 10.7276 10.6625 12.0224 9 12.0224C7.3375 12.0224 6.08333 10.7276 6.08333 9.01118C6.08333 7.29481 7.3375 6 9 6C10.6625 6 11.9167 7.29481 11.9167 9.01118ZM4 17.1397C4 14.7677 5.86917 12.838 8.16667 12.838H9.83333C12.1308 12.838 14 14.7677 14 17.1397V18H13.1667H12.3333H5.66667H4.83333H4V17.1397ZM16.459 12.4378V7.27665C16.459 6.57559 17.0273 6.00546 17.7268 6H18.3142C18.8115 6 19.2377 6.28643 19.4454 6.70107C19.4973 6.802 19.4617 6.92748 19.3634 6.98477L18.7213 7.35576C18.3716 7.55763 18.3716 8.06229 18.7213 8.26415L19.3333 8.61878C19.4918 8.71152 19.5874 8.87793 19.5874 9.05797C19.5874 9.24074 19.4891 9.40714 19.3333 9.49716L18.7213 9.85178C18.3716 10.0536 18.3716 10.5583 18.7213 10.7602L19.3716 11.1366C19.5055 11.213 19.5874 11.3549 19.5874 11.5076V12.4651C20.4344 12.9943 21 13.9327 21 15.0048C21 16.6579 19.6585 18 18 18C16.3443 18 15 16.6606 15 15.0048C15 13.9136 15.5847 12.9616 16.459 12.4378ZM18 17.2171C18.6803 17.2171 19.2322 16.6661 19.2322 15.9868C19.2322 15.3076 18.6803 14.7565 18 14.7565C17.3197 14.7565 16.7678 15.3076 16.7678 15.9868C16.7678 16.6661 17.3197 17.2171 18 17.2171Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
      {variant === "setMember" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.948 7.62959L21.4979 6.84653C21.4039 6.68208 21.2004 6.60769 21.0204 6.67425L20.6251 6.82303C20.1632 6.99531 19.6583 6.70558 19.58 6.22008L19.5096 5.80506C19.4744 5.61321 19.3139 5.47617 19.1221 5.47617H18.218C18.0262 5.47617 17.8657 5.61321 17.8344 5.80506L17.764 6.22008C17.6818 6.70558 17.1769 6.99922 16.7189 6.82303L16.3197 6.67817C16.1436 6.60769 15.9401 6.68208 15.8461 6.84653L15.396 7.62959C15.3021 7.79403 15.3373 8.00545 15.486 8.12683L15.8109 8.39698C16.1905 8.71021 16.1905 9.29359 15.8109 9.60681L15.486 9.87697C15.3373 9.99834 15.3021 10.2098 15.396 10.3742L15.8461 11.1573C15.9401 11.3217 16.1436 11.3961 16.3236 11.3295L16.7189 11.1808C17.1808 11.0085 17.6857 11.2982 17.764 11.7837L17.8344 12.1987C17.8657 12.3867 18.0262 12.5237 18.218 12.5237H19.1221C19.3139 12.5237 19.4783 12.3867 19.5096 12.1948L19.58 11.7798C19.6622 11.2943 20.1671 11.0007 20.6251 11.1768L21.0204 11.3256C21.2004 11.3922 21.4 11.3217 21.4979 11.1534L21.948 10.3703C22.0419 10.2058 22.0067 9.99442 21.858 9.87305L21.5331 9.60289C21.1534 9.28967 21.1534 8.70629 21.5331 8.39307L21.858 8.12291C22.0028 8.00545 22.0419 7.79403 21.948 7.62959ZM19.8466 8.99994C19.8466 9.64864 19.3207 10.1745 18.672 10.1745C18.0233 10.1745 17.4974 9.64864 17.4974 8.99994C17.4974 8.35123 18.0233 7.82535 18.672 7.82535C19.3207 7.82535 19.8466 8.35123 19.8466 8.99994ZM11.3815 12.3441C12.8406 12.3441 14.0234 11.1613 14.0234 9.70219C14.0234 8.24311 12.8406 7.06029 11.3815 7.06029C9.92245 7.06029 8.73962 8.24311 8.73962 9.70219C8.73962 11.1613 9.92245 12.3441 11.3815 12.3441ZM5.91797 12.3441C7.12549 12.3441 8.10437 11.3652 8.10437 10.1577C8.10437 8.95017 7.12549 7.97128 5.91797 7.97128C4.71045 7.97128 3.73156 8.95017 3.73156 10.1577C3.73156 11.3652 4.71045 12.3441 5.91797 12.3441ZM11.4172 13.2552C14.5838 13.2552 15.431 15.4179 15.6551 16.7024C15.739 17.1871 15.3509 17.628 14.8443 17.628H11.4172H7.98997C7.48345 17.628 7.09536 17.1871 7.17918 16.7024C7.40328 15.4179 8.25051 13.2552 11.4172 13.2552ZM6.2822 16.5348C6.2822 14.7839 7.55578 13.7271 7.87646 13.4902C7.41731 13.3426 6.87982 13.2552 6.24941 13.2552C3.08276 13.2552 2.23553 15.4179 2.01142 16.7024C1.92761 17.1871 2.3157 17.628 2.82222 17.628H6.24941H6.47351C6.35873 17.3328 6.2822 16.9757 6.2822 16.5348Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
      {variant === "evaluable" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4167 9.01118C10.4167 10.7276 9.1625 12.0224 7.5 12.0224C5.8375 12.0224 4.58333 10.7276 4.58333 9.01118C4.58333 7.29481 5.8375 6 7.5 6C9.1625 6 10.4167 7.29481 10.4167 9.01118ZM2.5 17.1397C2.5 14.7677 4.36917 12.838 6.66667 12.838H8.33333C10.6308 12.838 12.5 14.7677 12.5 17.1397V18H11.6667H10.8333H4.16667H3.33333H2.5V17.1397ZM17.3096 8.01715C17.6764 7.65034 18.2992 7.78129 18.4872 8.26477L19.8187 11.6885H21.5V15.9991L20.0631 15.9991L19.1052 15.9991L14.7214 15.9991C14.2531 15.9991 13.8535 15.6606 13.7765 15.1987L13.3577 12.686V11.2095C13.3577 10.6805 13.7866 10.2516 14.3156 10.2516H16.4709V8.85584L17.3096 8.01715ZM17.7275 8.95401L17.4289 9.25262V11.2095H14.3156V12.6068L14.7214 15.0412H19.1052V12.4968L17.7275 8.95401Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
          <path
            id="icon__fill"
            d="M14 13.0711V11.1553H17.1132L17 9L18 8.5L19.508 12.5922L19.5 15.5H14.5L14 13.0711Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
            fill-opacity="0.3"
          />
        </svg>
      )}
      {variant === "rejected" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4167 9.01118C10.4167 10.7276 9.1625 12.0224 7.5 12.0224C5.8375 12.0224 4.58333 10.7276 4.58333 9.01118C4.58333 7.29481 5.8375 6 7.5 6C9.1625 6 10.4167 7.29481 10.4167 9.01118ZM2.5 17.1397C2.5 14.7677 4.36917 12.838 6.66667 12.838H8.33333C10.6308 12.838 12.5 14.7677 12.5 17.1397V18H11.6667H10.8333H4.16667H3.33333H2.5V17.1397ZM17.5 15C18.1479 15 18.7479 14.7946 19.2383 14.4454L15.0546 10.2617C14.7054 10.7521 14.5 11.3521 14.5 12C14.5 13.6569 15.8431 15 17.5 15ZM15.7617 9.55462L19.9454 13.7383C20.2946 13.2479 20.5 12.6479 20.5 12C20.5 10.3431 19.1569 9 17.5 9C16.8521 9 16.2521 9.20539 15.7617 9.55462ZM17.5 16C19.7091 16 21.5 14.2091 21.5 12C21.5 9.79086 19.7091 8 17.5 8C15.2909 8 13.5 9.79086 13.5 12C13.5 14.2091 15.2909 16 17.5 16Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
