import cn from "classnames";
import React from "react";
import Button from "../Button";
import Icon from "../Icon";
import "./index.scss";

export enum EToastType {
  default = "default",
  warning = "warning",
  danger = "danger",
  notice = "notice",
}

export interface IToastViewProps {
  message: string;
  hiding?: boolean;
  type?: EToastType;
  closeFunc: () => void;
}

const ToastView: React.FC<IToastViewProps> = ({
  type = EToastType.default,
  message,
  hiding,
  closeFunc,
}) => {
  return (
    <div className={cn("ToastView", type, { hiding })}>
      <div className="message">{message}</div>
      <Button
        className="close-btn"
        size="xs"
        variant="quiet"
        onClick={closeFunc}
      />
    </div>
  );
};

export default ToastView;
