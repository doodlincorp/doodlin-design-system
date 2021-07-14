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

export function isObjectEqual<T>(first: T, second: T, cnt?: number): boolean {
  if (cnt && cnt > 2) return true;
  if (typeof first !== typeof second) return false;
  if (typeof first === "object") {
    for (const key in first) {
      if (!isObjectEqual(first[key], second[key], (cnt || 0) + 1)) return false;
    }
  } else if (typeof first !== "function") {
    if (first !== second) return false;
  }
  return true;
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
        selected: isObjectEqual(o, value),
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
