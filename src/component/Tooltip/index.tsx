import React from "react";
import cn from "classnames";
import "./index.scss";
import { InfoMarkIcon } from "../../component/Icon/InfoMarkIcon";
import { EColorMap } from "../../utils/colorMap";
import Icon from "../Icon";

export interface ITooltipProps {
  className?: string;
  variant?: "_box" | "_info" | "_question";
  tooltipText: string;
  placement?:
    | "_top-left"
    | "_top"
    | "_top-right"
    | "_left"
    | "_right"
    | "_bottom-left"
    | "_bottom"
    | "_bottom-right";
  // trigger?: "hover" | "click";
}

const Tooltip: React.FC<ITooltipProps> = ({
  className,
  children,
  variant = "_box",
  tooltipText,
  placement = "_bottom",
  // trigger = "hover",
}) => {
  return (
    <div className={cn("_TOOLTIP_", className, placement, variant)}>
      <div className="_target">
        {children}

        {tooltipText.length > 0 && (
          <div className="_tooltip-box">
            {variant === "_info" && (
              <Icon.InfoMark className="_icon" color={EColorMap.blue_4} />
            )}
            {variant === "_question" && (
              <Icon.QuestionMark
                variant="border"
                className="_icon"
                color={EColorMap.blue_4}
              />
            )}
            {tooltipText}
          </div>
        )}
      </div>
    </div>
  );
};
export default Tooltip;
