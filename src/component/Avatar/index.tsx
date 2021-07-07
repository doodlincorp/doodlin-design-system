import React from "react";
import "./index.scss";
import cn from "classnames";
import { getAvatarColorById } from "../../utils/colorGenerate";

const Avatar: React.FC<{
  className?: string;
  src: string | null;
  userId?: number;
  name?: string;
  size?:
    | /*24px*/ "xs"
    | /*32px*/ "sm"
    | /*40px*/ "md"
    | /*48px*/ "lg"
    | /*60px*/ "xl"
    | /*150px*/ "xxl";
  customSize?: number;
}> = ({ className, src, userId, name, size = "sm", customSize }) => {
  return (
    <div
      className={cn("_AVATAR_CONTAINER_", className, size)}
      style={{
        width: customSize && customSize,
        minWidth: customSize && customSize,
        height: customSize && customSize,
        fontSize: customSize && customSize * 0.5,
      }}
    >
      <div className={cn("_AVATAR_", size)}>
        <div className="image">
          {src ? (
            <img src={src} alt={name ? name[0] : ""} />
          ) : (
            <div
              className={cn("default-image")}
              style={{
                background: getAvatarColorById(userId || 0),
              }}
            >
              {name ? name[0] : ""}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
