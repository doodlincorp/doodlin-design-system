import React from "react";
import cn from "classnames";
import "./index.scss";
import { InfoMarkIcon } from "../../component/Icon/InfoMarkIcon";
import { EColorMap } from "../../utils/colorMap";

export interface ITooltipProps {
  className?: string;
  variant?: "box" | "tail";
  tooltipText: string;
  placement?:
    | "top-left"
    | "top"
    | "top-right"
    | "left"
    | "right"
    | "bottom-left"
    | "bottom"
    | "bottom-right";
  // trigger?: "hover" | "click";
}

const Tooltip: React.FC<ITooltipProps> = ({
  className,
  children,
  variant = "box",
  tooltipText,
  placement = "bottom",
  // trigger = "hover",
}) => {
  return (
    <div
      className={cn("_TOOLTIP_", className, placement, {
        tail: variant === "tail",
      })}
    >
      <div className="target">
        {children}

        {tooltipText.length > 0 && (
          <div className="tooltip-box">
            {variant === "tail" && (
              <InfoMarkIcon className="icon" color={EColorMap.blue_4} />
            )}
            {tooltipText}
          </div>
        )}
      </div>
    </div>
  );
};
export default Tooltip;
