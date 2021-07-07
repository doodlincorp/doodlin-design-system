import React from "react";
import "#/style/@common/ProfileIcon.scss";
import cn from "classnames";
import { getRandomColorById } from "#/utils/chart";

const ProfileIcon: React.FC<{
  src: string | null;
  userId?: number;
  name?: string;
  variant?: "circle" | "rounded";
}> = ({ src, userId, name, variant = "circle" }) => {
  return (
    <div className={cn("ProfileIcon", { circle: variant === "circle" })}>
      <div className="image">
        {src ? (
          <img src={src} alt={name ? name[0] : ""} />
        ) : (
          <div
            className={cn("default-image", { circle: variant === "circle" })}
            style={{
              background: getRandomColorById(userId || 0),
            }}
          >
            {name ? name[0] : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileIcon;
