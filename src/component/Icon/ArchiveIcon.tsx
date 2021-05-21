import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IArchiveIConProps {
  color?: keyof IColorMap;
  className?: string;
}

export const ArchiveIcon: React.FC<IArchiveIConProps> = ({
  color,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="icon__fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8387 7.49983V3.08118H3.16129V7.49983H6.06452C6.06452 8.56032 6.93161 9.42101 8 9.42101C9.06839 9.42101 9.93548 8.56032 9.93548 7.49983H12.8387ZM14 7.49983V3.08118C14 2.44526 13.4794 1.92847 12.8387 1.92847H3.16129C2.52065 1.92847 2 2.44526 2 3.08118V7.49983V11.9186V11.9186C2 12.5545 2.52065 13.0713 3.16129 13.0713H12.8387C13.4794 13.0713 14 12.5545 14 11.9186V11.9186V7.49983Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
      </svg>
    </div>
  );
};
