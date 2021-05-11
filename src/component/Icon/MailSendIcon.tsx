import React from "react";

export interface IMailSendIconProps {
  className?: string;
  variant?: "send" | "receive";
}

export const MailSendIcon: React.FC<IMailSendIconProps> = ({
  className,
  variant = "send",
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
      {variant === "send" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2244 4.24974L10.1827 0.741406C10.0827 0.633073 9.91607 0.633073 9.81607 0.741406L6.7744 4.24974C6.64107 4.40807 6.7494 4.64974 6.95773 4.64974H8.98273V7.85807C8.98273 7.99141 9.09107 8.09974 9.2244 8.09974H10.7661C10.8994 8.09974 11.0077 7.99141 11.0077 7.85807V4.64974H13.0327C13.2494 4.64974 13.3577 4.40807 13.2244 4.24974Z"
            fill="#8B8B8B"
          />
          <path
            d="M15.0162 5.7998H13.4412C13.3079 5.7998 13.1995 5.90814 13.1995 6.04147V6.90814C13.1995 7.04147 13.3079 7.1498 13.4412 7.1498H15.0162C15.3662 7.1498 15.6495 7.43314 15.6495 7.78314V8.38314L10.3162 12.0415C10.1245 12.1748 9.86621 12.1748 9.67454 12.0415L4.34121 8.38314V7.78314C4.34121 7.43314 4.62454 7.1498 4.97454 7.1498H6.54954C6.68288 7.1498 6.79121 7.04147 6.79121 6.90814V6.0498C6.79121 5.91647 6.68288 5.80814 6.54954 5.80814H4.97454C3.88288 5.80814 2.99121 6.69147 2.99121 7.79147V15.5415C2.99121 16.6331 3.87454 17.5248 4.97454 17.5248H15.0079C16.0995 17.5248 16.9912 16.6415 16.9912 15.5415V7.79147C16.9995 6.69147 16.1162 5.7998 15.0162 5.7998ZM15.6495 15.5331C15.6495 15.8831 15.3662 16.1665 15.0162 16.1665H4.98288C4.63288 16.1665 4.34954 15.8831 4.34954 15.5331V10.0165L8.91621 13.1498C9.24121 13.3748 9.62454 13.4831 9.99954 13.4831C10.3829 13.4831 10.7579 13.3748 11.0829 13.1498L15.6495 10.0165V15.5331Z"
            fill="#555555"
          />
        </svg>
      )}
      {variant === "receive" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0087 3.95781V0.749479C11.0087 0.616146 10.9004 0.507812 10.767 0.507812H9.23371C9.10038 0.507812 8.99204 0.616146 8.99204 0.749479V3.94948H6.95871C6.75038 3.94948 6.64204 4.19115 6.77538 4.34948L9.81704 7.85781C9.91704 7.96615 10.0837 7.96615 10.1837 7.85781L13.2254 4.34948C13.3587 4.19115 13.2504 3.94948 13.042 3.94948H11.0087V3.95781Z"
            fill="#F08C00"
          />
          <path
            d="M16.6917 6.8244C16.5333 6.56607 16.325 6.34107 16.075 6.16607L16.0333 6.14107L14.975 5.41607C14.875 5.3494 14.7333 5.36607 14.65 5.45774L14.0833 6.11607C13.9917 6.2244 14.0083 6.39107 14.1333 6.4744L15.2917 7.26607C15.3 7.26607 15.3 7.2744 15.3083 7.2744C15.5167 7.41607 15.65 7.65774 15.65 7.9244V8.36607L10.325 12.0244C10.1333 12.1577 9.875 12.1577 9.68333 12.0244L4.35833 8.36607V7.91607C4.35833 7.6494 4.49167 7.40774 4.7 7.26607C4.70833 7.26607 4.70833 7.25774 4.71667 7.25774L5.875 6.46607C5.99167 6.38274 6.01667 6.21607 5.925 6.10774L5.33333 5.4494C5.25 5.35774 5.11667 5.34107 5.00833 5.40774L3.95833 6.13274L3.925 6.15774C3.675 6.33274 3.46667 6.55774 3.30833 6.8244C3.11667 7.14107 3 7.51607 3 7.91607V15.3494C3 16.5327 3.95833 17.4911 5.14167 17.4911H14.8583C16.0417 17.4911 17 16.5327 17 15.3494V7.91607C17 7.51607 16.8833 7.14107 16.6917 6.8244ZM15.65 15.3494C15.65 15.7827 15.3 16.1411 14.8583 16.1411H5.14167C4.70833 16.1411 4.35 15.7911 4.35 15.3494V9.9994L8.91667 13.1327C9.24167 13.3577 9.625 13.4661 10 13.4661C10.3833 13.4661 10.7583 13.3577 11.0833 13.1327L15.65 9.9994V15.3494Z"
            fill="#555555"
          />
        </svg>
      )}
    </div>
  );
};
