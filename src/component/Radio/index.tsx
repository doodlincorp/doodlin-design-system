import React from "react";
import cn from "classnames";
import "./index.scss";
import Text from "../Text";
import { TFontSize } from "../..";
import { HTMLAttributes } from "react";

export interface IRadioProps extends HTMLAttributes<HTMLDivElement> {
  selected: boolean;
  disabled?: boolean;
  label?: string;
  labelSize?: TFontSize;
  labelWeight?: "light" | "regular" | "medium" | "bold";
  variant?: "default" | "red";
}

const Radio: React.FC<IRadioProps> = ({
  className,
  selected,
  disabled,
  label,
  labelSize,
  labelWeight,
  variant = "default",
  ...props
}) => {
  return (
    <div className={cn("_RADIO_", className, { onlyBtn: !label })} {...props}>
      <div className={cn("btn", variant, { selected, disabled })}></div>
      <Text
        className={cn("label", { disabled })}
        variant="inline"
        size={labelSize}
        weight={labelWeight}
      >
        {label}
      </Text>
    </div>
  );
};
export default Radio;
