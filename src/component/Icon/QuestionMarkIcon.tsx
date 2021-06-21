import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IQuestionMarkIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const QuestionMarkIcon: React.FC<IQuestionMarkIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
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
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.3769 15.116H12.9257C13.3891 15.116 13.7624 14.7684 13.8397 14.3179C13.9169 13.7515 14.1229 13.4168 14.509 13.1079C14.5694 13.0575 14.6771 12.9836 14.8012 12.8983C14.8357 12.8746 14.8716 12.8499 14.9081 12.8247C15.0383 12.7361 15.1866 12.6417 15.3463 12.54C16.3712 11.8874 17.8701 10.9329 18.1263 9.28467C18.358 7.7142 17.8559 6.11799 16.7231 5.01094C15.9122 4.19996 14.5605 3.05429 11.9345 3.0028C10.2997 2.96418 8.97378 3.31174 7.12011 4.88221C6.69531 5.24265 6.33488 5.59021 6.05168 5.89916C5.6655 6.32395 5.72986 6.99334 6.20615 7.32803L7.75087 8.43507C8.0212 8.62816 8.38164 8.58954 8.60047 8.34496C9.26985 7.61122 10.5056 6.54279 11.7929 6.54279H11.8444C12.8485 6.55566 13.608 6.82599 13.9941 7.27653C14.2645 7.59835 14.3674 8.04889 14.2773 8.60242C14.2258 8.9886 13.299 9.61936 12.9 9.88969C12.7985 9.9573 12.7045 10.0298 12.6125 10.1008C12.4943 10.1921 12.3794 10.2807 12.2563 10.3531C10.7245 11.2285 9.55305 12.1167 9.69465 14.4724C9.7204 14.8328 10.0165 15.116 10.3769 15.116ZM14.0843 18.6432C14.0843 19.9514 13.0239 21.0118 11.7157 21.0118C10.4076 21.0118 9.34717 19.9514 9.34717 18.6432C9.34717 17.3351 10.4076 16.2747 11.7157 16.2747C13.0239 16.2747 14.0843 17.3351 14.0843 18.6432Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
