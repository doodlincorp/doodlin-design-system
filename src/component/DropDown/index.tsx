import React, { HTMLAttributes, useRef } from "react";
import cn from "classnames";
import "./index.scss";
import { useToggle } from "dhj-hooks";

export interface IDropDownProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  placement?: "left" | "right" | "maxLeft" | "maxRight";
  btn: JSX.Element;
}

const DropDown: React.FC<IDropDownProps> = ({
  className,
  children,
  btn,
  placement = "left",
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [optionOpen, setOptionOpen] = useToggle(ref);

  return (
    <div className={cn("_DROP_DOWN_", className)} {...props} ref={ref}>
      <div
        className="toggle"
        onClick={(e) => {
          setOptionOpen(false);
          e.stopPropagation();
        }}
      >
        {btn}
      </div>
      {optionOpen && (
        <div className={cn("item-area", placement)}>{children}</div>
      )}
    </div>
  );
};

export default DropDown;
