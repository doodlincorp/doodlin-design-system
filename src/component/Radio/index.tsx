import React from "react";
import cn from "classnames";
import "./index.scss";
import Text from "../Text";
import { TFontSize } from "../..";

export interface IRadioProps {
  className?: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  label?: string;
  labelSize?: TFontSize;
  labelWeight?: "light" | "regular" | "medium" | "bold";
}

const Radio: React.FC<IRadioProps> = ({
  className,
  onClick,
  selected,
  disabled,
  label,
  labelSize,
  labelWeight,
  ...props
}) => {
  return (
    <div
      className={cn("_RADIO_", className, { onlyBtn: !label })}
      onClick={onClick}
      {...props}
    >
      <div className={cn("btn", { selected, disabled })}></div>
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
