import React, { HTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";
import Icon from "../Icon";

export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "referral";
  size?: "sm" | "md" | "lg";
  closeBtn?: boolean;
  selected?: boolean;
  onClickCloseBtn?: () => void;
}

const Tag: React.FC<ITagProps> = ({
  className,
  children,
  variant = "default",
  size = "sm",
  closeBtn,
  selected,
  onClickCloseBtn,
  ...props
}) => {
  return (
    <div className={cn("_TAG_", className)} {...props}>
      {variant === "default" ? (
        <div className={cn("default", size, closeBtn, { selected })}>
          #{children}
          {closeBtn && (
            <div
              className="tag-close-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (onClickCloseBtn) onClickCloseBtn();
              }}
            >
              <Icon.Close variant="circle" />
            </div>
          )}
        </div>
      ) : (
        <div className={cn("referral", size)}>{children}</div>
      )}
    </div>
  );
};

export default Tag;
