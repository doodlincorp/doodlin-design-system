import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IDoorIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const DoorIcon: React.FC<IDoorIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
}) => {
  return (
    <i
      className={cn("dds-icon", className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          d="M5 4.99997V19C5 19.2652 5.10536 19.5195 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H9V18H7V5.99997H9V3.99997H6C5.73478 3.99997 5.48043 4.10532 5.29289 4.29286C5.10536 4.4804 5 4.73475 5 4.99997ZM19.242 4.02997L11.242 2.02997C11.0946 1.99321 10.9408 1.99051 10.7922 2.02207C10.6436 2.05363 10.5042 2.11863 10.3845 2.21212C10.2648 2.30562 10.1679 2.42516 10.1013 2.56167C10.0347 2.69818 10 2.84807 10 2.99997V21C9.99965 21.152 10.034 21.3021 10.1005 21.4388C10.167 21.5755 10.2639 21.6952 10.3837 21.7888C10.5035 21.8824 10.6431 21.9473 10.7919 21.9787C10.9406 22.0101 11.0946 22.0071 11.242 21.97L19.242 19.97C19.4584 19.916 19.6506 19.7912 19.788 19.6154C19.9253 19.4397 19.9999 19.223 20 19V4.99997C19.9999 4.77691 19.9253 4.56027 19.788 4.38451C19.6506 4.20874 19.4584 4.08395 19.242 4.02997ZM15 12.188C14.9885 12.4454 14.8781 12.6886 14.6918 12.8667C14.5055 13.0448 14.2577 13.1442 14 13.1442C13.7423 13.1442 13.4945 13.0448 13.3082 12.8667C13.1219 12.6886 13.0115 12.4454 13 12.188V11.811C13.0001 11.5458 13.1056 11.2914 13.2932 11.104C13.4809 10.9166 13.7353 10.8113 14.0005 10.8115C14.2657 10.8116 14.52 10.9171 14.7075 11.1047C14.8949 11.2923 15.0001 11.5468 15 11.812V12.188Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
