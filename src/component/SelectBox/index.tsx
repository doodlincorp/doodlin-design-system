import React from "react";
import cn from "classnames";

import CustomSelect from "../CustomSelect";
import { CheckIcon } from "../Icon/CheckIcon";
import "./index.scss";
import { EColorMap } from "../../utils/colorMap";
import { isObjectEqual } from "../CustomSelect/optionsView";

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
  size?: "xxs" | "xs" | "sm" | "md";
  a11yStateSetter?: React.Dispatch<React.SetStateAction<T>>;
  maxHeight?: number;
}

const SelectBox: <T extends ISelectBoxItem>(
  p: ISelectBoxProps<T>
) => React.ReactElement<ISelectBoxProps<T>> = ({
  value,
  options,
  className,
  selectFunc,
  variant = "solid",
  size = "xs",
  maxHeight,
  a11yStateSetter,
}) => {
  return (
    <CustomSelect
      maxHeight={maxHeight}
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
          {isObjectEqual(o, value) ? (
            <div className="icon">
              <CheckIcon color={EColorMap.gray_6} />
            </div>
          ) : (
            o.icon && (
              <div
                className={cn("icon", { imoji: typeof o.icon === "string" })}
              >
                {o.icon}
              </div>
            )
          )}
          <div className="txt">{o.text}</div>
        </div>
      )}
      a11yStateSetter={a11yStateSetter}
    />
  );
};

export default SelectBox;
