import React, { HTMLAttributes, useRef } from "react";
import cn from "classnames";
import "./index.scss";
import { useToggle } from "dhoonjang-s-hooks";
import Button from "../Button";

export interface IOptionItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  text: string;
  icon?: React.ReactElement;
  loading?: boolean;
  disabled?: boolean;
  variant?: "basic" | "danger";
}

export const OptionItem: React.FC<IOptionItemProps> = ({
  className,
  text,
  icon,
  onClick,
  disabled,
  loading,
  variant,
}) => {
  return (
    <div className={cn("_OPTION_ITEM_", variant)} onClick={onClick}>
      <Button
        className={className}
        variant="quiet"
        size="sm"
        fullWidth
        label={{ labelIcon: icon, labelText: text }}
        disabled={disabled}
        loading={loading}
      />
    </div>
  );
};

export interface IOptionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  placement?: "left" | "right";
  btn: JSX.Element;
}

const Option: React.FC<IOptionProps> = ({
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
