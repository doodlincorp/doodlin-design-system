import { useToggle } from "dhj-hooks";
import React, { useRef } from "react";
import cn from "classnames";
import "./index.scss";
import { ArrowIcon } from "../Icon/ArrowIcon";
import { EColorMap } from "../../utils/colorMap";

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
  const [optionOpen, setOptionOpen] = useToggle(ref);

  const optionsView = options.map((o, i) => (
    <div
      className={cn("option", {
        selected: JSON.stringify(o) === JSON.stringify(value),
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
        <ArrowIcon
          color={EColorMap.gray_6}
          size={16}
          rotate={270}
          variant="chevron"
        />
      </div>
      {optionOpen && <div className="options">{optionsView}</div>}
    </div>
  );
};

export default CustomSelect;
