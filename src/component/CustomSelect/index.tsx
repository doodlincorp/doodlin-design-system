import { useToggle } from "dhoonjang-s-hooks";
import React, { useRef } from "react";
import cn from "classnames";
import "./index.scss";
import SelectArrowIcon from "../../asset/SelectArrowIcon";

export interface ICustomSelectProps<T> {
  value: T;
  options: T[];
  arrowIconVariant?: "single" | "double";
  className?: string;
  getCurrentViewFunc: (v: T) => JSX.Element;
  getOptionViewFunc: (v: T) => JSX.Element;
}

const CustomSelect: <T>(
  p: ICustomSelectProps<T>,
) => React.ReactElement<ICustomSelectProps<T>> = ({
  value,
  options,
  className,
  arrowIconVariant,
  getOptionViewFunc,
  getCurrentViewFunc,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [optionOpen, setOptionOpen] = useToggle(ref);

  const optionsView = options.map((o, i) => (
    <div
      className={cn("option", {
        selected: o === value,
      })}
      onClick={(e) => {
        setOptionOpen(false);
        e.stopPropagation();
      }}
      key={i}
    >
      {getOptionViewFunc(o)}
    </div>
  ));

  return (
    <div className={cn("_CUSTOM_SELECT_", className)} ref={ref}>
      <div
        className={cn("current", { selected: optionOpen })}
        onClick={(e) => {
          setOptionOpen();
          e.stopPropagation();
        }}
      >
        {getCurrentViewFunc(value)}
        <SelectArrowIcon variant={arrowIconVariant} color={"gray_6"} />
      </div>
      {optionOpen && <div className="options">{optionsView}</div>}
    </div>
  );
};

export default CustomSelect;
