import React from "react";
import CustomSelect from "../CustomSelect";
import { CheckIcon } from "../Icon/CheckIcon";
import cn from "classnames";
import "./index.scss";

export interface ISelectBoxItem {
  icon?: JSX.Element | string;
  text: string;
}

export interface ISelectBoxProps<T extends ISelectBoxItem> {
  value: T;
  options: T[];
  className?: string;
  variant?: "solid" | "border" | "quiet";
  selectFunc: (o: T) => void;
  size?: "xs" | "sm" | "md" | "lg";
}

const SelectBox: <T extends ISelectBoxItem>(
  p: ISelectBoxProps<T>,
) => React.ReactElement<ISelectBoxProps<T>> = ({
  value,
  options,
  className,
  selectFunc,
  variant = "solid",
  size = "sm",
}) => {
  return (
    <CustomSelect
      value={value}
      className={cn("_SELECT_BOX_", className, variant, size)}
      options={options}
      getCurrentViewFunc={(v) => (
        <div className="current-view">
          {v.icon && (
            <div className={cn("icon", { imoji: typeof v.icon === "string" })}>
              {v.icon}
            </div>
          )}
          <div className="txt">{v.text}</div>
        </div>
      )}
      getOptionViewFunc={(o) => (
        <div className={cn("option-view")} onClick={() => selectFunc(o)}>
          {o.icon &&
            (JSON.stringify(o) === JSON.stringify(value) ? (
              <CheckIcon />
            ) : (
              <div
                className={cn("icon", { imoji: typeof o.icon === "string" })}
              >
                {o.icon}
              </div>
            ))}
          <div className="txt">{o.text}</div>
        </div>
      )}
    />
  );
};

export default SelectBox;
