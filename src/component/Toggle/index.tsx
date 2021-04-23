import React from "react";
import cn from "classnames";
import "./index.scss";

export interface IToggleProps {
  className?: string;
  onClick: () => void;
}

const Toggle: React.FC<IToggleProps> = ({ className, onClick }) => {
  return (
    <div className={className}>
      <input id="cb1" className="_TOGGLE_" type="checkbox" onClick={onClick} />
      <label className="toggle-bg" htmlFor="cb1"></label>
    </div>
  );
};
export default Toggle;
