import React from "react";
import cn from "classnames";
import "./index.scss";
import { CloseIcon } from "../Icon/CloseIcon";
import logo from "../../asset/greeting-logo.svg";

export interface IModalProps {
  className?: string;
  variant?: "default" | "alt";
  closeBtn?: () => void;
  header?: {
    Text?: string;
  };
  footer?: {
    cancelBtn?: React.ReactElement;
    submitBtn?: React.ReactElement;
    BtnAlign?: "start" | "center" | "end" | "space-between";
  };
  zIndex?: number;
  width?: number;
}

const Modal: React.FC<IModalProps> = ({
  className,
  children,
  header,
  footer,
  closeBtn,
  zIndex,
  width,
  variant = "default",
}) => {
  return (
    <div className="_MODAL_" style={{ zIndex: zIndex }}>
      <div
        className={cn("modal-content-box", className)}
        style={{ width: width }}
      >
        {closeBtn && (
          <div
            className={cn("close-btn", { alt: variant === "alt" })}
            onClick={closeBtn}
          >
            <CloseIcon size={20} />
          </div>
        )}

        {header ? (
          <div className="modal-header">{header.Text}</div>
        ) : (
          variant === "alt" && (
            <div className="modal-header alt">
              <img src={logo} alt="greeting logo" />
            </div>
          )
        )}

        <div className={cn("modal-content", { alt: variant === "alt" })}>
          {children}
        </div>
        {footer && (
          <div className={cn("footer", footer.BtnAlign || "end")}>
            {footer.cancelBtn}
            {footer.submitBtn}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
