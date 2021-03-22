import React from "react";
import cn from "classnames";
import "./index.scss";
import { ModalCloseIcon } from "../../asset/ModalCloseIcon";
import { useState } from "@storybook/addons";

export interface IModalProps {
  className?: string;
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
}) => {
  return (
    <div className={cn("_MODAL_", className)}>
      <div className="modal-content-box">
        <div className="close-btn">
          <ModalCloseIcon />
        </div>
        {header ? <div className="modal-header">{header.Text}</div> : ""}
        <div className="modal-content">{children}</div>
        {footer ? (
          <div className={cn("modal-btn-area", footer.footerStyle || "end")}>
            {footer.cancelBtn}
            {footer.submitBtn}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Modal;
