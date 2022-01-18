import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import "./index.scss";
import { EColorMap } from "../../utils/colorMap";
import Icon from "../Icon";
import { createPortal } from "react-dom";
import { usePortalNode } from "../../hooks/usePortalNode";
import classNames from "classnames";
import { getOffset } from "../../utils/offset";

type IPlacement =
  | "_top-left"
  | "_top"
  | "_top-right"
  | "_left"
  | "_right"
  | "_bottom-left"
  | "_bottom"
  | "_bottom-right";

export interface ITooltipProps {
  className?: string;
  variant?: "_box" | "_info" | "_question";
  tooltipText: string;
  placement?: IPlacement;
  usingPortalNode?: boolean;
}

const TooltipBox = ({
  variant,
  tooltipText,
  isolated,
  placement,
  hovered,
  targetRef,
}: {
  variant: "_box" | "_info" | "_question";
  tooltipText: string;
  isolated: boolean;
  hovered: boolean;
  placement?: IPlacement;
  targetRef?: React.RefObject<HTMLElement>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });
  useEffect(() => {
    if (!hovered) return;
    if (targetRef && targetRef.current) {
      const offset_ = getOffset(targetRef.current);
      switch (placement) {
        case "_bottom-left":
          offset_.top += targetRef.current.offsetHeight + 4;
          break;
        case "_bottom-right":
          offset_.top += targetRef.current.offsetHeight + 4;
          offset_.left +=
            targetRef.current.offsetWidth -
            (ref.current ? ref.current.offsetWidth : 0);
          break;
        case "_left":
          offset_.left -= (ref.current ? ref.current.offsetWidth : 0) + 4;
          offset_.top +=
            targetRef.current.offsetHeight / 2 -
            (ref.current ? ref.current.offsetHeight / 2 : 0);
          break;
        case "_right":
          offset_.left += targetRef.current.offsetWidth + 4;
          offset_.top +=
            targetRef.current.offsetHeight / 2 -
            (ref.current ? ref.current.offsetHeight / 2 : 0);
          break;
        case "_top":
          offset_.left +=
            targetRef.current.offsetWidth / 2 -
            (ref.current ? ref.current.offsetWidth / 2 : 0);
          offset_.top -= (ref.current ? ref.current.offsetHeight : 0) + 4;
          break;
        case "_top-left":
          offset_.top -= (ref.current ? ref.current.offsetHeight : 0) + 4;
          break;
        case "_top-right":
          offset_.top -= (ref.current ? ref.current.offsetHeight : 0) + 4;
          offset_.left +=
            targetRef.current.offsetWidth -
            (ref.current ? ref.current.offsetWidth : 0);
          break;
        case "_bottom":
        default:
          offset_.left +=
            targetRef.current.offsetWidth / 2 -
            (ref.current ? ref.current.offsetWidth / 2 : 0);
          offset_.top += targetRef.current.offsetHeight + 4;
          break;
      }
      setOffset(offset_);
    }
    // object의 위치가 변할 수 있으므로 hovered도 감지 대상에 포함한다.
  }, [placement, hovered]);
  return (
    <div
      ref={ref}
      className={classNames(
        isolated ? "isolated-tooltip-box" : "_tooltip-box",
        isolated && hovered && "appear"
      )}
      style={{
        left: isolated ? offset.left : undefined,
        top: isolated ? offset.top : undefined,
      }}
    >
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
  );
};

const Tooltip: React.FC<ITooltipProps> = ({
  className,
  children,
  variant = "_box",
  tooltipText,
  placement = "_bottom",
  usingPortalNode,
}) => {
  const portalNode = usePortalNode("tooltip-portal");
  const [portal, setPortal] = useState<React.ReactPortal | null>(null);
  const [hovered, setHovered] = useState(false); // portal node에만 영향
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (portalNode && portalNode.current) {
      setPortal(
        createPortal(
          <TooltipBox
            variant={variant}
            tooltipText={tooltipText}
            isolated={true}
            hovered={hovered}
            targetRef={ref}
            placement={placement}
          />,
          portalNode.current!
        )
      );
    }
  }, [portalNode, hovered]);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className={cn("_TOOLTIP_", className, placement, variant)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <div className="_target">
        {children}
        {tooltipText.length > 0 &&
          (usingPortalNode && portal ? (
            portal
          ) : (
            <TooltipBox
              variant={variant}
              tooltipText={tooltipText}
              isolated={false}
              hovered={hovered}
            />
          ))}
      </div>
    </div>
  );
};
export default Tooltip;
