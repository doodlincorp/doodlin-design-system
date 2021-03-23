import React from "react";
import cn from "classnames";
import "./index.scss";
import { ModalCloseIcon } from "../../asset/ModalCloseIcon";

export interface IModalProps {
  className?: string;
  closeBtn?: () => void;
  header?: {
    Text?: string;
  };
  footer?: {
    cancelBtn?: React.ReactElement;
    submitBtn?: React.ReactElement;
    footerStyle?: "start" | "center" | "end";
  };
}

const Modal: React.FC<IModalProps> = ({
  className,
  children,
  header,
  footer,
  closeBtn,
}) => {
  return (
    <div className="_MODAL_">
      <div className={cn("modal-content-box", className)}>
        {closeBtn && (
          <div className="close-btn" onClick={closeBtn}>
            <ModalCloseIcon />
          </div>
        )}
        {header && <div className="modal-header">{header.Text}</div>}
        <div className="modal-content">{children}</div>
        {footer && (
          <div className={cn("modal-btn-area", footer.footerStyle || "end")}>
            {footer.cancelBtn}
            {footer.submitBtn}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
