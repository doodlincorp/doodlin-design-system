import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import cn from "classnames";

export interface IThumbIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant: "sobad" | "bad" | "soso" | "good" | "sogood";
  size?: "sm" | "md" | "lg";
}

export const ThumbIcon: React.FC<IThumbIconProps> = ({
  color,
  className,
  variant,
  size = "md",
}) => {
  return (
    <div
      className={cn("ThumbIcon", className)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* size md */}
      {variant === "sobad" && size === "md" && (
        <svg
          width="32"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M28.8219 7.65306L25.9836 15.0298L24.4422 14.125L24.0489 10.1333H19.0739L18.2023 8.86656V6.9931L19.2015 5.93927L19.1271 3.45906L19.5736 2.85231V1.89429H28.8219V7.65306Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M19.4245 10.5376H23.5915V12.9007C23.5915 13.2733 23.7403 13.6352 23.9954 13.9013L24.8884 14.8381C25.1223 15.0829 25.4305 15.2 25.7282 15.2C26.2172 15.2 26.6849 14.9019 26.855 14.3697L28.7153 8.38741H32V1H27.8755H20.3068C19.5626 1 18.9248 1.51094 18.7654 2.23478L18.6059 2.92668C18.5103 3.35247 18.4571 3.7889 18.4571 4.22534V5.13013C18.4571 5.38561 18.4252 5.64108 18.3508 5.89655L18.1913 6.45007C18.0638 6.89715 18 7.36552 18 7.83388V9.11124C18.0106 9.90959 18.6378 10.5376 19.4245 10.5376ZM19.1374 7.84452C19.1374 7.4826 19.1906 7.12068 19.2863 6.78005L19.4457 6.22653C19.5414 5.87526 19.5945 5.51334 19.5945 5.15142V4.24662C19.5945 3.89535 19.6371 3.54408 19.7115 3.20345L19.839 2.62863C19.9028 2.35187 20.1473 2.14962 20.4343 2.14962H27.8755V7.25908L27.631 8.05743L25.7707 14.0397C25.7707 14.0504 25.7601 14.0717 25.7282 14.0717C25.7175 14.0717 25.7175 14.0717 25.7069 14.061L24.814 13.1243C24.7608 13.0604 24.7289 12.9859 24.7289 12.9007V10.5376V9.39865H23.5915H19.4245C19.265 9.39865 19.1481 9.27092 19.1481 9.1219V7.84452H19.1374Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M10.8219 7.65306L7.98359 15.0298L6.44221 14.125L6.04889 10.1333H1.07395L0.202271 8.86656V6.9931L1.20151 5.93927L1.1271 3.45906L1.57357 2.85231V1.89429H10.8219V7.65306Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M1.42445 10.5376H5.5915V12.9007C5.5915 13.2733 5.74032 13.6352 5.99544 13.9013L6.88839 14.8381C7.12225 15.0829 7.43053 15.2 7.72818 15.2C8.21717 15.2 8.68489 14.9019 8.85498 14.3697L10.7153 8.38741H14V1H9.87548H2.30676C1.56264 1 0.924831 1.51094 0.765377 2.23478L0.605922 2.92668C0.51025 3.35247 0.4571 3.7889 0.4571 4.22534V5.13013C0.4571 5.38561 0.425211 5.64108 0.350799 5.89655L0.191344 6.45007C0.0637817 6.89715 0 7.36552 0 7.83388V9.11124C0.0106302 9.90959 0.637818 10.5376 1.42445 10.5376ZM1.13743 7.84452C1.13743 7.4826 1.19058 7.12068 1.28626 6.78005L1.44571 6.22653C1.54138 5.87526 1.59453 5.51334 1.59453 5.15142V4.24662C1.59453 3.89535 1.63705 3.54408 1.71147 3.20345L1.83903 2.62863C1.90281 2.35187 2.14731 2.14962 2.43432 2.14962H9.87548V7.25908L9.63099 8.05743L7.7707 14.0397C7.7707 14.0504 7.76007 14.0717 7.72818 14.0717C7.71755 14.0717 7.71754 14.0717 7.70691 14.061L6.81398 13.1243C6.76082 13.0604 6.72893 12.9859 6.72893 12.9007V10.5376V9.39865H5.5915H1.42445C1.265 9.39865 1.14807 9.27092 1.14807 9.1219V7.84452H1.13743Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "bad" && size === "md" && (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M12.6791 7.64232L9.83869 15.0297L8.29614 14.1143L7.90252 10.1225H2.92379L2.05145 8.85581V6.98235L3.05146 5.92853L2.97699 3.44831L3.42379 2.85221V1.88354H12.6791V7.64232Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M3.27488 10.5376H7.44509V12.9008C7.44509 13.2733 7.59403 13.6352 7.84935 13.9013L8.74297 14.8381C8.97701 15.0829 9.28552 15.2 9.58339 15.2C10.0728 15.2 10.5408 14.9019 10.7111 14.3697L12.5728 8.3874H15.86V1H11.7323H4.15785C3.41317 1 2.77488 1.51094 2.6153 2.23478L2.45573 2.92668C2.35998 3.35247 2.30679 3.7889 2.30679 4.22534V5.13013C2.30679 5.38561 2.27488 5.64108 2.20041 5.89655L2.05148 6.46072C1.92382 6.90779 1.85999 7.37616 1.85999 7.84453V9.12189C1.85999 9.89895 2.48765 10.5376 3.27488 10.5376ZM2.98764 7.84453C2.98764 7.48261 3.04083 7.12069 3.13658 6.78006L3.29615 6.22653C3.3919 5.87526 3.44509 5.51334 3.44509 5.15142V4.24662C3.44509 3.89535 3.48764 3.54408 3.56211 3.20345L3.68977 2.62863C3.7536 2.35187 3.99828 2.14962 4.28552 2.14962H11.7323V7.25907L11.4877 8.05742L9.62595 14.0397C9.62595 14.0504 9.61531 14.0717 9.58339 14.0717C9.57276 14.0717 9.57275 14.0717 9.56211 14.061L8.6685 13.1243C8.61531 13.0604 8.58339 12.9859 8.58339 12.9008V10.5376V9.39865H7.44509H3.27488C3.11531 9.39865 2.99828 9.27091 2.99828 9.12189V7.84453H2.98764Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}{" "}
      {variant === "soso" && size === "md" && (
        <svg
          width="32"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M28.8109 8.55756L25.9727 1.17017L24.4313 2.08561L24.038 6.07736H19.063L18.1913 7.34407V9.21754L19.1906 10.2714L19.1162 12.7516L19.5626 13.3583V14.3163H28.8109V8.55756Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M18 7.08876V8.36611C18 8.83448 18.0638 9.2922 18.1913 9.74992L18.3508 10.3034C18.4252 10.5483 18.4571 10.8037 18.4571 11.0699V11.9747C18.4571 12.4111 18.5103 12.8475 18.6059 13.2733L18.7654 13.9652C18.9355 14.6891 19.5733 15.2 20.3068 15.2H27.8755H32V7.81259H28.7153L26.855 1.83028C26.6955 1.30869 26.2172 1 25.7282 1C25.4305 1 25.1222 1.1171 24.8884 1.36192L23.9954 2.29865C23.7403 2.56477 23.5915 2.92669 23.5915 3.29925V5.66237H19.4244C18.6272 5.66237 18 6.30105 18 7.08876ZM19.1268 7.08876C19.1268 6.92908 19.2544 6.81199 19.4032 6.81199H23.5702H24.7077V5.67301V3.30989C24.7077 3.22474 24.7396 3.15022 24.7927 3.08636L25.6856 2.14963C25.6963 2.13898 25.6963 2.13898 25.7069 2.13898C25.7388 2.13898 25.7388 2.16027 25.7494 2.17091L27.6097 8.15322L27.8542 8.95157V14.061H20.4131C20.126 14.061 19.8815 13.8588 19.8178 13.582L19.6902 13.0072C19.6158 12.6666 19.5733 12.3153 19.5733 11.964V11.0592C19.5733 10.6973 19.5201 10.3354 19.4244 9.98411L19.265 9.43058C19.1693 9.07931 19.1162 8.72803 19.1162 8.36611V7.08876H19.1268Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M3.18909 7.64232L6.02735 15.0191L7.56874 14.1143L7.96205 10.1225H12.937L13.8087 8.85581V6.98235L12.8094 5.92852L12.8839 3.44831L12.4374 2.84157V1.88354H3.18909V7.64232Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M14 9.11125V7.83389C14 7.36552 13.9362 6.9078 13.8087 6.45008L13.6492 5.89656C13.5748 5.65173 13.5429 5.39626 13.5429 5.13014V4.22534C13.5429 3.78891 13.4897 3.35248 13.3941 2.92669L13.2346 2.23479C13.0645 1.51095 12.4267 1 11.6932 1H4.12453H0V8.38741H3.28474L5.14503 14.3697C5.30448 14.8913 5.78284 15.2 6.27183 15.2C6.56948 15.2 6.87776 15.0829 7.11162 14.8381L8.00456 13.9013C8.25968 13.6352 8.40851 13.2733 8.40851 12.9007V10.5376H12.5756C13.3728 10.527 14 9.89895 14 9.11125ZM12.8732 9.11125C12.8732 9.27092 12.7456 9.38801 12.5968 9.38801H8.42977H7.2817V10.527V12.8901C7.2817 12.9753 7.24982 13.0498 7.19666 13.1136L6.30372 14.0504C6.29309 14.061 6.2931 14.061 6.28246 14.061C6.25057 14.061 6.25057 14.0397 6.23994 14.0291L4.37965 8.04678L4.13516 7.24843V2.13898H11.5763C11.8633 2.13898 12.1078 2.34123 12.1716 2.618L12.2992 3.19281C12.3736 3.53344 12.4161 3.88471 12.4161 4.23598V5.14079C12.4161 5.5027 12.4692 5.86462 12.5649 6.21589L12.7244 6.76942C12.82 7.12069 12.8732 7.47197 12.8732 7.83389V9.11125Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "good" && size === "md" && (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M12.6709 8.60738L9.83265 1.21997L8.29127 2.13541L7.89795 6.12716H2.92301L2.05133 7.39388V9.26734L3.05057 10.3212L2.97616 12.8014L3.42263 13.4081V14.3661H12.6709V8.60738Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M1.85999 7.13856V8.41592C1.85999 8.88429 1.92377 9.34201 2.05133 9.79973L2.21078 10.3533C2.2852 10.5981 2.31709 10.8536 2.31709 11.1197V12.0245C2.31709 12.4609 2.37024 12.8973 2.46591 13.3231L2.62536 14.015C2.79545 14.7389 3.43326 15.2498 4.16674 15.2498H11.7355H15.86V7.8624H12.5753L10.715 1.88009C10.5555 1.3585 10.0771 1.0498 9.58815 1.0498C9.29051 1.0498 8.98223 1.1669 8.74836 1.41172L7.85543 2.34845C7.6003 2.61457 7.45148 2.97649 7.45148 3.34906V5.71217H3.28443C2.48716 5.71217 1.85999 6.35085 1.85999 7.13856ZM2.98679 7.13856C2.98679 6.97889 3.11435 6.8618 3.26317 6.8618H7.43022H8.56765V5.72282V3.3597C8.56765 3.27454 8.59955 3.20003 8.6527 3.13616L9.54563 2.19943C9.55626 2.18878 9.55627 2.18878 9.5669 2.18878C9.59879 2.18878 9.59879 2.21007 9.60942 2.22072L11.4697 8.20303L11.7142 9.00138V14.1002H4.27304C3.98603 14.1002 3.74153 13.8979 3.67775 13.6212L3.55019 13.0464C3.47578 12.7057 3.43325 12.3544 3.43325 12.0032V11.0984C3.43325 10.7365 3.3801 10.3745 3.28443 10.0233L3.12498 9.46974C3.02931 9.11847 2.97616 8.7672 2.97616 8.40528V7.13856H2.98679Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}{" "}
      {variant === "sogood" && size === "md" && (
        <svg
          width="32"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M10.8109 8.56831L7.97267 1.18091L6.43129 2.09635L6.03797 6.0881H1.06302L0.191345 7.35482V9.22828L1.19059 10.2821L1.11618 12.7517L1.56264 13.3584V14.3271H10.8109V8.56831Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M0 7.08876V8.36612C0 8.83448 0.0637817 9.2922 0.191344 9.74993L0.350799 10.3034C0.425211 10.5483 0.4571 10.8037 0.4571 11.0699V11.9747C0.4571 12.4111 0.51025 12.8475 0.605922 13.2733L0.765377 13.9652C0.935461 14.6891 1.57327 15.2 2.30676 15.2H9.87548H14V7.81259H10.7153L8.85498 1.83028C8.69552 1.3087 8.21716 1 7.72817 1C7.43052 1 7.12224 1.11709 6.88838 1.36192L5.99544 2.29865C5.74032 2.56477 5.5915 2.92669 5.5915 3.29925V5.66237H1.42445C0.627179 5.67301 0 6.31169 0 7.08876ZM1.1268 7.08876C1.1268 6.92909 1.25437 6.81199 1.40319 6.81199H5.57023H6.70767V5.67301V3.32054C6.70767 3.23538 6.73956 3.16087 6.79271 3.097L7.68565 2.16027C7.69628 2.14962 7.69628 2.14963 7.70691 2.14963C7.7388 2.14963 7.7388 2.17091 7.74943 2.18156L9.60972 8.16387L9.85421 8.96222V14.0717H2.41306C2.12604 14.0717 1.88155 13.8694 1.81777 13.5927L1.6902 13.0178C1.61579 12.6772 1.57327 12.3259 1.57327 11.9747V11.0699C1.57327 10.7079 1.52012 10.346 1.42445 9.99475L1.265 9.44123C1.16933 9.08996 1.11618 8.73868 1.11618 8.37676V7.08876H1.1268Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M28.8109 8.56831L25.9727 1.18091L24.4313 2.09635L24.038 6.0881H19.063L18.1913 7.35482V9.22828L19.1906 10.2821L19.1162 12.7517L19.5626 13.3584V14.3271H28.8109V8.56831Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M18 7.08876V8.36612C18 8.83448 18.0638 9.2922 18.1913 9.74993L18.3508 10.3034C18.4252 10.5483 18.4571 10.8037 18.4571 11.0699V11.9747C18.4571 12.4111 18.5103 12.8475 18.6059 13.2733L18.7654 13.9652C18.9355 14.6891 19.5733 15.2 20.3068 15.2H27.8755H32V7.81259H28.7153L26.855 1.83028C26.6955 1.3087 26.2172 1 25.7282 1C25.4305 1 25.1222 1.11709 24.8884 1.36192L23.9954 2.29865C23.7403 2.56477 23.5915 2.92669 23.5915 3.29925V5.66237H19.4244C18.6272 5.67301 18 6.31169 18 7.08876ZM19.1268 7.08876C19.1268 6.92909 19.2544 6.81199 19.4032 6.81199H23.5702H24.7077V5.67301V3.32054C24.7077 3.23538 24.7396 3.16087 24.7927 3.097L25.6856 2.16027C25.6963 2.14962 25.6963 2.14963 25.7069 2.14963C25.7388 2.14963 25.7388 2.17091 25.7494 2.18156L27.6097 8.16387L27.8542 8.96222V14.0717H20.4131C20.126 14.0717 19.8815 13.8694 19.8178 13.5927L19.6902 13.0178C19.6158 12.6772 19.5733 12.3259 19.5733 11.9747V11.0699C19.5733 10.7079 19.5201 10.346 19.4244 9.99475L19.265 9.44123C19.1693 9.08996 19.1162 8.73868 19.1162 8.37676V7.08876H19.1268Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {/* size sm */}
      {variant === "sobad" && size === "sm" && (
        <svg
          width="24"
          height="12"
          viewBox="0 0 24 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M21.6106 6.04975L19.6106 11.2497L18.5206 10.6097L18.2406 7.78974H14.7306L14.1206 6.89974V5.57975L14.8206 4.83974L14.7706 3.09975L15.0906 2.66975V1.98975H21.6106V6.04975Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M14.9806 8.07987H17.9206V9.73988C17.9206 9.99988 18.0206 10.2599 18.2006 10.4499L18.8306 11.1099C19.0006 11.2899 19.2106 11.3699 19.4306 11.3699C19.7706 11.3699 20.1106 11.1599 20.2206 10.7899L21.5406 6.56988H23.8606V1.36987H20.9506H15.6106C15.0906 1.36987 14.6406 1.72987 14.5206 2.23987L14.4106 2.72987C14.3406 3.02987 14.3106 3.33987 14.3106 3.63987V4.27987C14.3106 4.45987 14.2806 4.63987 14.2406 4.81987L14.1306 5.20988C14.0406 5.52988 14.0006 5.84986 14.0006 6.17986V7.07987C13.9806 7.63987 14.4306 8.07987 14.9806 8.07987ZM14.7806 6.18987C14.7806 5.93987 14.8206 5.67987 14.8806 5.43987L14.9906 5.04987C15.0606 4.79987 15.1006 4.54987 15.1006 4.28987V3.64987C15.1006 3.39987 15.1306 3.15987 15.1806 2.91987L15.2706 2.51987C15.3106 2.31987 15.4906 2.17987 15.6906 2.17987H20.9406V5.77987L20.7606 6.33987L19.4406 10.5599C19.4406 10.5699 19.4306 10.5799 19.4106 10.5799C19.4006 10.5799 19.4006 10.5799 19.3906 10.5699L18.7606 9.90987C18.7206 9.86987 18.7006 9.80987 18.7006 9.74987V8.08987V7.28986H17.9006H14.9606C14.8506 7.28986 14.7606 7.19987 14.7606 7.08987V6.18987H14.7806Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M7.61067 6.04975L5.61066 11.2497L4.52067 10.6097L4.24067 7.78974H0.730667L0.120667 6.89974V5.57975L0.820663 4.83974L0.770668 3.09975L1.09067 2.66975V1.98975H7.61067V6.04975Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M0.980645 8.07987H3.92065V9.73988C3.92065 9.99988 4.02065 10.2599 4.20065 10.4499L4.83064 11.1099C5.00064 11.2899 5.21064 11.3699 5.43064 11.3699C5.77064 11.3699 6.11065 11.1599 6.22065 10.7899L7.54064 6.56988H9.86065V1.36987H6.95065H1.61064C1.09064 1.36987 0.640646 1.72987 0.520646 2.23987L0.410646 2.72987C0.340646 3.02987 0.310647 3.33987 0.310647 3.63987V4.27987C0.310647 4.45987 0.280647 4.63987 0.240647 4.81987L0.130647 5.20988C0.0406468 5.52988 0.000641903 5.84986 0.000641903 6.17986V7.07987C-0.0193581 7.63987 0.430645 8.07987 0.980645 8.07987ZM0.780641 6.18987C0.780641 5.93987 0.820647 5.67987 0.880647 5.43987L0.990647 5.04987C1.06065 4.79987 1.10064 4.54987 1.10064 4.28987V3.64987C1.10064 3.39987 1.13064 3.15987 1.18064 2.91987L1.27065 2.51987C1.31065 2.31987 1.49064 2.17987 1.69064 2.17987H6.94064V5.77987L6.76064 6.33987L5.44064 10.5599C5.44064 10.5699 5.43065 10.5799 5.41065 10.5799C5.40065 10.5799 5.40064 10.5799 5.39064 10.5699L4.76064 9.90987C4.72064 9.86987 4.70065 9.80987 4.70065 9.74987V8.08987V7.28986H3.90064H0.960641C0.850641 7.28986 0.760644 7.19987 0.760644 7.08987V6.18987H0.780641Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "bad" && size === "sm" && (
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M8.85005 5.6701L6.85004 10.8701L5.76005 10.2301L5.48005 7.4201H1.97005L1.36005 6.53011V5.21011L2.06004 4.46011L2.01005 2.7201L2.33005 2.2901V1.61011H8.85005V5.6701Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M2.22003 7.71H5.16003V9.37C5.16003 9.63 5.26003 9.88999 5.44003 10.08L6.07002 10.74C6.24002 10.92 6.45002 11 6.67002 11C7.01002 11 7.35003 10.79 7.46003 10.42L8.78002 6.2H11.1V1H8.19003H2.85002C2.33002 1 1.88003 1.36 1.76003 1.87L1.65003 2.36C1.58003 2.66 1.55003 2.97 1.55003 3.27V3.91C1.55003 4.09 1.52003 4.27 1.48003 4.45L1.37003 4.84C1.28003 5.16 1.24002 5.48 1.24002 5.81V6.71C1.22002 7.26 1.67003 7.71 2.22003 7.71ZM2.02002 5.81C2.02002 5.56 2.06003 5.3 2.12003 5.06L2.23003 4.67C2.30003 4.42 2.34002 4.17 2.34002 3.91V3.27C2.34002 3.02 2.37002 2.77999 2.42002 2.53999L2.51003 2.14C2.55003 1.94 2.73002 1.8 2.93002 1.8H8.18002V5.39999L8.00002 5.96L6.68002 10.18C6.68002 10.19 6.67003 10.2 6.65003 10.2C6.64003 10.2 6.64002 10.2 6.63002 10.19L6.00002 9.53C5.96002 9.49 5.94003 9.43 5.94003 9.37V7.71V6.91H5.14002H2.20002C2.09002 6.91 2.00002 6.82 2.00002 6.71V5.81H2.02002Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "soso" && size === "sm" && (
        <svg
          width="24"
          height="12"
          viewBox="0 0 24 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M21.63 6.01982L19.63 0.819824L18.54 1.45982L18.26 4.26982H14.75L14.14 5.16982V6.48982L14.84 7.22983L14.79 8.96983L15.11 9.39983V10.0798H21.63V6.01982Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M14 4.97994V5.87994C14 6.20994 14.05 6.53994 14.13 6.84994L14.24 7.23994C14.29 7.41994 14.31 7.59994 14.31 7.77994V8.41994C14.31 8.72994 14.34 9.02994 14.41 9.32994L14.52 9.81994C14.64 10.3299 15.09 10.6899 15.61 10.6899H20.95H23.86V5.48994H21.54L20.22 1.26994C20.1 0.899936 19.77 0.689941 19.43 0.689941C19.22 0.689941 19 0.769936 18.83 0.949936L18.2 1.60994C18.02 1.79994 17.92 2.04994 17.92 2.31994V3.97994H14.98C14.45 3.97994 14 4.42994 14 4.97994ZM14.8 4.97994C14.8 4.86994 14.89 4.77994 15 4.77994H17.94H18.74V3.97994V2.31994C18.74 2.25994 18.76 2.20994 18.8 2.15994L19.43 1.49994C19.44 1.48994 19.44 1.48994 19.45 1.48994C19.47 1.48994 19.48 1.49994 19.48 1.50994L20.8 5.72994L20.98 6.28994V9.88994H15.73C15.53 9.88994 15.35 9.74994 15.31 9.54994L15.22 9.14994C15.16 8.90994 15.14 8.65994 15.14 8.41994V7.77994C15.14 7.51994 15.1 7.26994 15.03 7.01994L14.92 6.62994C14.85 6.38994 14.82 6.12994 14.82 5.87994V4.97994H14.8Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M2.23999 5.37006L4.22999 10.5701L5.32999 9.93006L5.59999 7.11006H9.10999L9.71999 6.22006V4.90006L9.01999 4.16006L9.06999 2.41006L8.75999 1.99006V1.31006H2.23999V5.37006Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M9.85999 6.39994V5.49994C9.85999 5.16994 9.81 4.83994 9.73 4.52994L9.62 4.13994C9.57 3.95994 9.55 3.77994 9.55 3.59994V2.95994C9.55 2.64994 9.51999 2.34994 9.44999 2.04994L9.34 1.55994C9.22 1.04994 8.76999 0.689941 8.24999 0.689941H2.91H0V5.88994H2.32L3.64 10.1099C3.76 10.4799 4.09 10.6899 4.43 10.6899C4.64 10.6899 4.86 10.6099 5.03 10.4299L5.66 9.76994C5.84 9.57994 5.93999 9.32994 5.93999 9.05994V7.39994H8.88C9.42 7.39994 9.85999 6.95994 9.85999 6.39994ZM9.05999 6.39994C9.05999 6.50994 8.96999 6.59994 8.85999 6.59994H5.91999H5.12V7.39994V9.05994C5.12 9.11994 5.1 9.16994 5.06 9.21994L4.43 9.87994C4.42 9.88994 4.42 9.88994 4.41 9.88994C4.39 9.88994 4.38 9.87994 4.38 9.86994L3.06 5.64994L2.88 5.08994V1.48994H8.13C8.33 1.48994 8.51 1.62994 8.55 1.82994L8.63999 2.22994C8.69999 2.46994 8.71999 2.71994 8.71999 2.95994V3.59994C8.71999 3.85994 8.75999 4.10994 8.82999 4.35994L8.93999 4.74994C9.00999 4.98994 9.04 5.24994 9.04 5.49994V6.39994H9.05999Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "good" && size === "sm" && (
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M7.84999 5.32988L5.84998 0.129883L4.75999 0.769882L4.47999 3.57988H0.969986L0.359985 4.47989V5.79988L1.05998 6.53988L1.00999 8.27988L1.32999 8.70988V9.38988H7.84999V5.32988Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M0.219971 4.29V5.19C0.219971 5.52 0.269968 5.85 0.349968 6.16L0.459969 6.55C0.509969 6.73 0.529968 6.91 0.529968 7.09V7.73C0.529968 8.04 0.559967 8.34 0.629967 8.64L0.739967 9.13C0.859967 9.64 1.30997 10 1.82997 10H7.16997H10.08V4.8H7.75996L6.43997 0.579998C6.31997 0.209998 5.98997 0 5.64997 0C5.43997 0 5.21997 0.0799983 5.04997 0.259998L4.41997 0.919998C4.23997 1.11 4.13997 1.36 4.13997 1.63V3.29H1.19997C0.669966 3.29 0.219971 3.74 0.219971 4.29ZM1.01997 4.29C1.01997 4.18 1.10997 4.09 1.21997 4.09H4.15997H4.95997V3.29V1.63C4.95997 1.57 4.97997 1.52 5.01997 1.47L5.64997 0.809998C5.65997 0.799998 5.65997 0.799999 5.66997 0.799999C5.68997 0.799999 5.69997 0.81 5.69997 0.82L7.01997 5.04L7.19997 5.6V9.2H1.94997C1.74997 9.2 1.56997 9.06 1.52997 8.86L1.43997 8.46C1.37997 8.22 1.35997 7.97 1.35997 7.73V7.09C1.35997 6.83 1.31997 6.58 1.24997 6.33L1.13997 5.94C1.06997 5.7 1.03997 5.44 1.03997 5.19V4.29H1.01997Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "sogood" && size === "sm" && (
        <svg
          width="24"
          height="12"
          viewBox="0 0 24 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M7.63002 6.33989L5.63001 1.13989L4.54002 1.77989L4.26002 4.58989H0.750015L0.140015 5.47989V6.79989L0.840012 7.53989L0.790016 9.28989L1.11002 9.71989V10.3999H7.63002V6.33989Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M0 5.30001V6.20001C0 6.53001 0.0499973 6.86001 0.129997 7.17001L0.239998 7.56001C0.289998 7.74001 0.309998 7.92001 0.309998 8.10001V8.74001C0.309998 9.05001 0.339996 9.35001 0.409996 9.65001L0.519997 10.14C0.639997 10.65 1.09 11.01 1.61 11.01H6.95H9.86V5.81001H7.53999L6.22 1.59001C6.1 1.22001 5.77 1.01001 5.43 1.01001C5.22 1.01001 5 1.09001 4.83 1.27001L4.2 1.93001C4.02 2.12001 3.92 2.37001 3.92 2.64001V4.30001H0.979996C0.449996 4.30001 0 4.75001 0 5.30001ZM0.799995 5.30001C0.799995 5.19001 0.89 5.10001 1 5.10001H3.94H4.74V4.30001V2.64001C4.74 2.58001 4.76 2.53001 4.8 2.48001L5.43 1.82001C5.44 1.81001 5.44 1.81001 5.45 1.81001C5.47 1.81001 5.48 1.82001 5.48 1.83001L6.8 6.05001L6.98 6.61001V10.21H1.73C1.53 10.21 1.35 10.07 1.31 9.87001L1.22 9.47001C1.16 9.23001 1.14 8.98001 1.14 8.74001V8.10001C1.14 7.84001 1.1 7.59001 1.03 7.34001L0.919998 6.95001C0.849998 6.71001 0.82 6.45001 0.82 6.20001V5.30001H0.799995Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M21.63 6.33989L19.63 1.13989L18.54 1.77989L18.26 4.58989H14.75L14.14 5.47989V6.79989L14.84 7.53989L14.79 9.28989L15.11 9.71989V10.3999H21.63V6.33989Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M14 5.30001V6.20001C14 6.53001 14.05 6.86001 14.13 7.17001L14.24 7.56001C14.29 7.74001 14.31 7.92001 14.31 8.10001V8.74001C14.31 9.05001 14.34 9.35001 14.41 9.65001L14.52 10.14C14.64 10.65 15.09 11.01 15.61 11.01H20.95H23.86V5.81001H21.54L20.22 1.59001C20.1 1.22001 19.77 1.01001 19.43 1.01001C19.22 1.01001 19 1.09001 18.83 1.27001L18.2 1.93001C18.02 2.12001 17.92 2.37001 17.92 2.64001V4.30001H14.98C14.45 4.30001 14 4.75001 14 5.30001ZM14.8 5.30001C14.8 5.19001 14.89 5.10001 15 5.10001H17.94H18.74V4.30001V2.64001C18.74 2.58001 18.76 2.53001 18.8 2.48001L19.43 1.82001C19.44 1.81001 19.44 1.81001 19.45 1.81001C19.47 1.81001 19.48 1.82001 19.48 1.83001L20.8 6.05001L20.98 6.61001V10.21H15.73C15.53 10.21 15.35 10.07 15.31 9.87001L15.22 9.47001C15.16 9.23001 15.14 8.98001 15.14 8.74001V8.10001C15.14 7.84001 15.1 7.59001 15.03 7.34001L14.92 6.95001C14.85 6.71001 14.82 6.45001 14.82 6.20001V5.30001H14.8Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {/* size lg */}
      {variant === "sobad" && size === "lg" && (
        <svg
          width="48"
          height="24"
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M41.46 11.7199L37.46 22.1199L35.28 20.8399L34.73 15.2099H27.71L26.48 13.4298V10.7899L27.89 9.30985L27.79 5.81985L28.42 4.95985V3.59985H41.46V11.7199Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M28.2 15.7899H34.08V19.1099C34.08 19.6399 34.28 20.1399 34.65 20.5299L35.91 21.8599C36.24 22.2099 36.68 22.3699 37.1 22.3699C37.78 22.3699 38.45 21.9499 38.69 21.2099L41.32 12.7799H45.96V2.37988H40.15H29.46C28.42 2.37988 27.51 3.09989 27.28 4.11989L27.06 5.09988C26.92 5.69988 26.85 6.30989 26.85 6.92989V8.20988C26.85 8.56988 26.8 8.93989 26.7 9.28989L26.48 10.0699C26.3 10.6999 26.21 11.3599 26.21 12.0099V13.8099C26.2 14.8999 27.1 15.7899 28.2 15.7899ZM27.8 11.9999C27.8 11.4899 27.87 10.9799 28.01 10.4899L28.23 9.70988C28.37 9.21988 28.44 8.70988 28.44 8.19988V6.91988C28.44 6.42988 28.5 5.92988 28.61 5.44988L28.79 4.64989C28.88 4.25989 29.23 3.97989 29.63 3.97989H40.13V11.1799L39.78 12.3099L37.15 20.7399C37.15 20.7499 37.14 20.7799 37.09 20.7799C37.08 20.7799 37.07 20.7799 37.06 20.7599L35.8 19.4299C35.72 19.3499 35.68 19.2299 35.68 19.1199V15.7999V14.1999H34.08H28.2C27.98 14.1999 27.81 14.0199 27.81 13.8099V11.9999H27.8Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M17.46 11.7199L13.46 22.1199L11.28 20.8399L10.73 15.2099H3.70998L2.47998 13.4298V10.7899L3.88998 9.30985L3.78998 5.81985L4.41998 4.95985V3.59985H17.46V11.7199Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M4.19998 15.7899H10.08V19.1099C10.08 19.6399 10.28 20.1399 10.65 20.5299L11.91 21.8599C12.24 22.2099 12.68 22.3699 13.1 22.3699C13.78 22.3699 14.45 21.9499 14.69 21.2099L17.32 12.7799H21.96V2.37988H16.15H5.45998C4.41998 2.37988 3.50998 3.09989 3.27998 4.11989L3.05998 5.09988C2.91998 5.69988 2.84998 6.30989 2.84998 6.92989V8.20988C2.84998 8.56988 2.79998 8.93989 2.69998 9.28989L2.47998 10.0699C2.29998 10.6999 2.20998 11.3599 2.20998 12.0099V13.8099C2.19998 14.8999 3.09998 15.7899 4.19998 15.7899ZM3.79998 11.9999C3.79998 11.4899 3.86998 10.9799 4.00998 10.4899L4.22998 9.70988C4.36998 9.21988 4.43998 8.70988 4.43998 8.19988V6.91988C4.43998 6.42988 4.49998 5.92988 4.60998 5.44988L4.78998 4.64989C4.87998 4.25989 5.22998 3.97989 5.62998 3.97989H16.13V11.1799L15.78 12.3099L13.15 20.7399C13.15 20.7499 13.14 20.7799 13.09 20.7799C13.08 20.7799 13.07 20.7799 13.06 20.7599L11.8 19.4299C11.72 19.3499 11.68 19.2299 11.68 19.1199V15.7999V14.1999H10.08H4.19998C3.97998 14.1999 3.80998 14.0199 3.80998 13.8099V11.9999H3.79998Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "bad" && size === "lg" && (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M17.4599 11.34L13.4599 21.75L11.2799 20.47L10.7299 14.84H3.70992L2.47992 13.05V10.41L3.88992 8.92999L3.78992 5.43998L4.41992 4.57998V3.22998H17.4599V11.34Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M4.19992 15.42H10.0799V18.74C10.0799 19.27 10.2799 19.77 10.6499 20.16L11.9099 21.49C12.2399 21.84 12.6799 22 13.0999 22C13.7799 22 14.4499 21.58 14.6899 20.84L17.3199 12.41H21.9599V2.01001H16.1499H5.45992C4.41992 2.01001 3.50992 2.73002 3.27992 3.75002L3.05992 4.73001C2.91992 5.33001 2.84992 5.94001 2.84992 6.56001V7.84001C2.84992 8.20001 2.79992 8.57001 2.69992 8.92001L2.47992 9.70001C2.29992 10.33 2.20992 10.99 2.20992 11.64V13.44C2.19992 14.52 3.09992 15.42 4.19992 15.42ZM3.79992 11.62C3.79992 11.11 3.86992 10.6 4.00992 10.11L4.22992 9.33001C4.36992 8.84001 4.43992 8.33002 4.43992 7.82001V6.54001C4.43992 6.05001 4.49992 5.55001 4.60992 5.07001L4.78992 4.27001C4.87992 3.88001 5.22992 3.60001 5.62992 3.60001H16.1299V10.8L15.7799 11.93L13.1499 20.36C13.1499 20.37 13.1399 20.4 13.0899 20.4C13.0799 20.4 13.0699 20.4 13.0599 20.38L11.7999 19.05C11.7199 18.97 11.6799 18.85 11.6799 18.74V15.42V13.82H10.0799H4.19992C3.97992 13.82 3.80992 13.64 3.80992 13.43V11.62H3.79992Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "soso" && size === "lg" && (
        <svg
          width="48"
          height="24"
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M41.46 12.3499L37.46 1.93994L35.28 3.22994L34.73 8.84994H27.71L26.48 10.6399V13.2799L27.89 14.7599L27.79 18.2499L28.42 19.1099V20.4599H41.46V12.3499Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M26.2 10.27V12.07C26.2 12.73 26.2899 13.38 26.4699 14.01L26.69 14.79C26.79 15.14 26.84 15.5 26.84 15.87V17.15C26.84 17.76 26.9099 18.38 27.0499 18.98L27.27 19.96C27.5 20.98 28.41 21.7 29.45 21.7H40.13H45.9399V11.3H41.2999L38.6699 2.86996C38.4399 2.12996 37.77 1.70996 37.08 1.70996C36.65 1.70996 36.2199 1.86996 35.8899 2.21996L34.63 3.54996C34.27 3.92996 34.06 4.43996 34.06 4.96996V8.28996H28.2C27.1 8.26996 26.2 9.16996 26.2 10.27ZM27.7999 10.27C27.7999 10.05 27.98 9.87996 28.19 9.87996H34.07H35.6699V8.27996V4.95996C35.6699 4.83996 35.71 4.72996 35.79 4.64996L37.0499 3.31996C37.07 3.29996 37.07 3.29996 37.08 3.29996C37.12 3.29996 37.1299 3.31996 37.1399 3.33996L39.77 11.77L40.1199 12.9V20.1H29.62C29.22 20.1 28.87 19.82 28.78 19.43L28.6 18.63C28.49 18.15 28.43 17.66 28.43 17.16V15.88C28.43 15.37 28.3599 14.86 28.2199 14.37L28 13.59C27.86 13.1 27.79 12.59 27.79 12.08V10.27H27.7999Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M6.69995 11.0399L10.69 21.4399L12.88 20.1599L13.43 14.5299H20.44L21.67 12.7499V10.1099L20.27 8.62992L20.37 5.12992L19.74 4.27992V2.91992H6.69995V11.0399Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M21.95 13.1199V11.3199C21.95 10.6599 21.86 10.0099 21.68 9.37994L21.4599 8.59994C21.3599 8.24994 21.3099 7.88994 21.3099 7.51994V6.23994C21.3099 5.62994 21.24 5.00994 21.1 4.40994L20.8799 3.42994C20.65 2.40994 19.74 1.68994 18.7 1.68994H8.01995H2.19995V12.0899H6.83995L9.46995 20.5199C9.69995 21.2599 10.37 21.6799 11.06 21.6799C11.49 21.6799 11.92 21.5199 12.25 21.1699L13.51 19.8399C13.87 19.4599 14.08 18.9499 14.08 18.4199V15.0999H19.9599C21.0599 15.1099 21.95 14.2199 21.95 13.1199ZM20.35 13.1199C20.35 13.3399 20.1699 13.5099 19.9599 13.5099H14.08H12.48V15.1099V18.4299C12.48 18.5499 12.44 18.6599 12.36 18.7399L11.1 20.0699C11.08 20.0899 11.08 20.0899 11.07 20.0899C11.03 20.0899 11.02 20.0699 11.01 20.0499L8.37995 11.6199L8.02995 10.4899V3.28994H18.53C18.93 3.28994 19.28 3.56994 19.37 3.95994L19.5499 4.75994C19.66 5.23994 19.7199 5.72995 19.7199 6.22995V7.50994C19.7199 8.01995 19.79 8.52994 19.93 9.01994L20.15 9.79995C20.2899 10.2899 20.36 10.7999 20.36 11.3099V13.1199H20.35Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "good" && size === "lg" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M17.38 12.66L13.39 2.25L11.2 3.53L10.65 9.16H3.63997L2.40997 10.95V13.59L3.80997 15.07L3.70997 18.56L4.33997 19.42V20.77H17.38V12.66Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M2.12 10.58V12.38C2.12 13.04 2.21 13.69 2.39 14.32L2.61 15.1C2.71 15.45 2.76 15.81 2.76 16.18V17.46C2.76 18.07 2.83 18.69 2.97 19.29L3.19 20.27C3.42 21.29 4.33 22.01 5.37 22.01H16.05H21.86V11.61H17.22L14.59 3.18002C14.36 2.44002 13.69 2.02002 13 2.02002C12.57 2.02002 12.14 2.18002 11.81 2.53002L10.55 3.86002C10.21 4.22002 10 4.73002 10 5.26002V8.58002H4.12C3.02 8.58002 2.12 9.48002 2.12 10.58ZM3.73 10.58C3.73 10.36 3.91 10.19 4.12 10.19H10H11.6V8.59002V5.27002C11.6 5.15002 11.64 5.04002 11.72 4.96002L12.98 3.63002C13 3.61002 13 3.61002 13.01 3.61002C13.05 3.61002 13.06 3.63002 13.07 3.65002L15.7 12.08L16.05 13.21V20.41H5.56C5.16 20.41 4.80999 20.13 4.72 19.74L4.54 18.94C4.43 18.46 4.37 17.97 4.37 17.47V16.19C4.37 15.68 4.3 15.17 4.16 14.68L3.94 13.9C3.8 13.41 3.73 12.9 3.73 12.39V10.58Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
      {variant === "sogood" && size === "lg" && (
        <svg
          width="48"
          height="24"
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M17.38 12.65L13.39 2.25L11.2 3.53L10.65 9.16H3.63997L2.40997 10.95V13.58L3.80997 15.07L3.70997 18.56L4.33997 19.41V20.77H17.38V12.65Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M2.12 10.58V12.38C2.12 13.04 2.21 13.69 2.39 14.32L2.61 15.1C2.71 15.45 2.76 15.81 2.76 16.18V17.46C2.76 18.07 2.83 18.69 2.97 19.29L3.19 20.27C3.43 21.28 4.33 22 5.38 22H16.06H21.87V11.6H17.23L14.6 3.17C14.38 2.42 13.71 2 13.02 2C12.59 2 12.16 2.16 11.83 2.51L10.57 3.84C10.21 4.22 10 4.73 10 5.26V8.58H4.12C3.02 8.58 2.12 9.48 2.12 10.58ZM3.73 10.58C3.73 10.36 3.91 10.19 4.12 10.19H10H11.6V8.59V5.26C11.6 5.14 11.64 5.03 11.72 4.95L12.98 3.62C13 3.6 13 3.6 13.01 3.6C13.05 3.6 13.06 3.62 13.07 3.64L15.7 12.07L16.05 13.2V20.4H5.56C5.16 20.4 4.80999 20.12 4.72 19.73L4.54 18.93C4.43 18.45 4.37 17.96 4.37 17.46V16.18C4.37 15.67 4.3 15.16 4.16 14.67L3.94 13.89C3.8 13.4 3.73 12.89 3.73 12.38V10.58Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            opacity="0.3"
            d="M41.38 12.65L37.39 2.25L35.2 3.53L34.65 9.16H27.64L26.41 10.95V13.58L27.81 15.07L27.71 18.56L28.34 19.41V20.77H41.38V12.65Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
          <path
            id="thumb-icon__color"
            d="M26.12 10.58V12.38C26.12 13.04 26.21 13.69 26.39 14.32L26.61 15.1C26.71 15.45 26.76 15.81 26.76 16.18V17.46C26.76 18.07 26.83 18.69 26.97 19.29L27.19 20.27C27.42 21.29 28.33 22.01 29.37 22.01H40.05H45.86V11.6H41.22L38.59 3.17C38.38 2.42 37.71 2 37.02 2C36.59 2 36.16 2.16 35.83 2.51L34.57 3.84C34.21 4.22 34 4.73 34 5.26V8.58H28.12C27.02 8.58 26.12 9.48 26.12 10.58ZM27.73 10.58C27.73 10.36 27.91 10.19 28.12 10.19H34H35.6V8.59V5.26C35.6 5.14 35.64 5.03 35.72 4.95L36.98 3.62C37 3.6 37 3.6 37.01 3.6C37.05 3.6 37.06 3.62 37.07 3.64L39.7 12.07L40.05 13.2V20.4H29.55C29.15 20.4 28.8 20.12 28.71 19.73L28.53 18.93C28.42 18.45 28.36 17.96 28.36 17.46V16.18C28.36 15.67 28.29 15.16 28.15 14.67L27.93 13.89C27.79 13.4 27.72 12.89 27.72 12.38V10.58H27.73Z"
            fill={color ? colorMap[color] : colorMap.gray_5}
          />
        </svg>
      )}
    </div>
  );
};
