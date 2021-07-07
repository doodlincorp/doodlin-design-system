import React from "react";
import "./index.scss";
import cn from "classnames";
import { getAvatarColorById } from "../../utils/colorGenerate";

const Avatar: React.FC<{
  src: string | null;
  userId?: number;
  name?: string;
  variant?: "circle" | "rounded";
}> = ({ src, userId, name, variant = "circle" }) => {
  return (
    <div className={cn("Avatar", { circle: variant === "circle" })}>
      <div className="image">
        {src ? (
          <img src={src} alt={name ? name[0] : ""} />
        ) : (
          <div
            className={cn("default-image", { circle: variant === "circle" })}
            style={{
              background: getAvatarColorById(userId || 0),
            }}
          >
            {name ? name[0] : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
