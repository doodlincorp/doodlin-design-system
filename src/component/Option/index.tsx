import React, { HTMLAttributes, useRef } from "react";
import cn from "classnames";
import "./index.scss";
import { useToggle } from "dhoonjang-s-hooks";

export interface IOptionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  placement?: "left" | "right";
  btn: JSX.Element;
}

export const Option: React.FC<IOptionProps> = ({
  className,
  children,
  btn,
  placement = "left",
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [optionOpen, setOptionOpen] = useToggle(ref);

  return (
    <div className={cn("_OPTION_", className)} {...props} ref={ref}>
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
        <div className={cn("option-area", placement)}>{children}</div>
      )}
    </div>
  );
};

export default Option;
