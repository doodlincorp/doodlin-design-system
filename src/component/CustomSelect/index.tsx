import { useOutsideClick } from "dhoonjang-s-hooks";
import React, { useRef, useState } from "react";
import cn from "classnames";
import "./index.scss";

export interface ICustomSelectProps<T> {
  value: T;
  options: T[];
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
  getOptionViewFunc,
  getCurrentViewFunc,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [optionOpen, setOptionOpen] = useState<boolean>(false);

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

  useOutsideClick(() => setOptionOpen(false), ref);

  return (
    <div className={cn("_CUSTOM_SELECT_", className)} ref={ref}>
      <div
        className={cn("current", { selected: optionOpen })}
        onClick={(e) => {
          setOptionOpen(!optionOpen);
          e.stopPropagation();
        }}
      >
        {getCurrentViewFunc(value)}
      </div>
      {optionOpen && <div className="options">{optionsView}</div>}
    </div>
  );
};

export default CustomSelect;
