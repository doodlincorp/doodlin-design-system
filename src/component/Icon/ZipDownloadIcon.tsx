import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IZipDownloadIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const ZipDownloadIcon: React.FC<IZipDownloadIconProps> = ({
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
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5517 9.05882L16.7586 3.41176L15.3103 2H6.25862C4.45914 2 3 3.42235 3 5.17647V22.8235C3 24.5776 4.45914 26 6.25862 26H20.7414C22.5409 26 24 24.5776 24 22.8235V10.4706L22.5517 9.05882ZM22.5517 22.8235C22.5517 23.7976 21.7407 24.5882 20.7414 24.5882H6.25862C5.25931 24.5882 4.44828 23.7976 4.44828 22.8235V5.17647C4.44828 4.20235 5.25931 3.41176 6.25862 3.41176H9.87931V5.52941H8.06897V6.94118H9.87931V9.05882H8.06897V10.4706H9.87931V12.2353H12.7759V10.4706H10.9655V9.05882H12.7759V6.94118H10.9655V5.52941H12.7759V3.41176H15.3103V8C15.3103 9.36588 16.4436 10.4706 17.8448 10.4706H22.5517V22.8235Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <path
          d="M11.6896 14.7059C11.8887 14.7059 12.0516 14.8647 12.0516 15.0588V17.2753V17.6035L12.2001 17.8965L12.7939 19.0788C12.9242 19.34 12.8446 19.6541 12.602 19.8235L10.8966 21.0129C10.8568 21.0412 10.8206 21.0447 10.7916 21.0447C10.7627 21.0447 10.7265 21.0376 10.6866 21.0129L8.98129 19.8235C8.73871 19.6541 8.65543 19.34 8.7894 19.0788L9.37233 17.9176L9.51716 17.6247V17.2965V15.0588C9.51716 14.8647 9.68009 14.7059 9.87922 14.7059H11.6896ZM11.6896 13.2941H9.87922C8.87991 13.2941 8.06888 14.0847 8.06888 15.0588V17.2965L7.48595 18.4576C7.04422 19.34 7.3194 20.4023 8.13767 20.9741L9.84302 22.1635C10.1254 22.3612 10.4585 22.46 10.788 22.46C11.1175 22.46 11.4506 22.3612 11.733 22.1635L13.4384 20.9741C14.2566 20.4023 14.5318 19.34 14.0901 18.4576L13.4999 17.2753V15.0588C13.4999 14.0847 12.6889 13.2941 11.6896 13.2941Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </div>
  );
};
