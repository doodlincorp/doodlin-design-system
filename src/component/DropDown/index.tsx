import React, { HTMLAttributes, useRef } from "react";
import cn from "classnames";
import "./index.scss";
import { useToggle } from "dhj-hooks";
import { createPortal } from "react-dom";

export interface IDropDownProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  placement?: "left" | "right" | "maxLeft" | "maxRight";
  btn: JSX.Element;
  open?: boolean;
  width?: number;
  portalDomNode?: HTMLElement;
}

const DropDown: React.FC<IDropDownProps> = ({
  className,
  children,
  btn,
  placement = "left",
  open,
  width,
  portalDomNode,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [optionOpen, setOptionOpen] = useToggle(ref);

  return (
    <div className={cn("_DROP_DOWN_", className)} {...props} ref={ref}>
      <div
        className="toggle"
        onClick={(e) => {
          if (open === undefined) {
            setOptionOpen(false);
            e.stopPropagation();
          }
        }}
      >
        {btn}
      </div>
      {open === undefined && optionOpen && (
        <div className={cn("item-area", placement)} style={{ width: width }}>
          {portalDomNode ? createPortal(children, portalDomNode) : children}
        </div>
      )}
      {open !== undefined && open && (
        <div className={cn("item-area", placement)} style={{ width: width }}>
          {portalDomNode ? createPortal(children, portalDomNode) : children}
        </div>
      )}
    </div>
  );
};

export default DropDown;
