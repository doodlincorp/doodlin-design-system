import React, {
  HTMLAttributes,
  useRef,
  useEffect,
  useState,
  cloneElement,
} from "react";
import cn from "classnames";
import "./index.scss";
import { createPortal } from "react-dom";
import { getOffset } from "../../utils/offset";
import { debounce } from "../../utils/debounce";
import { usePortalNode } from "../../hooks/usePortalNode";
import { useToggle } from "doodlin-hooks";

export interface IDropDownProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  placement?: "left" | "right" | "maxLeft" | "maxRight";
  btn: JSX.Element;
  open?: boolean;
  width?: number;
  usingPortalNode?: boolean;
}

const DropDown: React.FC<IDropDownProps> = ({
  className,
  children,
  btn,
  placement = "left",
  open,
  width,
  usingPortalNode,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownItemsRef = useRef<HTMLDivElement>(null);
  const [optionOpen, setOptionOpen] = useToggle(ref, dropdownItemsRef);
  const [offset, setOffset] = useState({ top: 0, left: 0 });
  const [visibility, setVisibility] = useState<"visible" | "hidden">("hidden");
  const portalNode = usePortalNode(usingPortalNode);

  useEffect(() => {
    setVisibility("hidden");
    const update = () => {
      if (open || optionOpen) {
        const offset_ = getOffset(ref.current as HTMLElement);
        switch (placement) {
          case "left":
            offset_.top += (buttonRef.current?.offsetHeight || 0) + 4;
            offset_.left -=
              (dropdownItemsRef.current?.offsetWidth || 0) -
              (buttonRef.current?.offsetWidth || 0);
            break;
          case "maxLeft":
            offset_.left -= (dropdownItemsRef.current?.offsetWidth || 0) + 8;
            break;
          case "right":
            offset_.top += (buttonRef.current?.offsetHeight || 0) + 4;
            break;
          case "maxRight":
            offset_.left += (buttonRef.current?.offsetWidth || 0) + 8;
            break;
        }
        setOffset(offset_);
        setVisibility("visible");
      }
    };
    const handler = debounce(() => {
      update();
    }, 100);
    let observer: MutationObserver;
    if (open || optionOpen) {
      update();
      document.addEventListener("scroll", handler, true);
      // dropdown Item의 width, nested scroll등이 바뀌는 경우 대응
      observer = new MutationObserver(handler);
      if (dropdownItemsRef.current) {
        observer.observe(dropdownItemsRef.current, { attributes: true });
      }
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
      document.removeEventListener("scroll", handler, true);
    };
  }, [optionOpen, open]);

  return (
    <div className={cn("_DROP_DOWN_", className)} {...props} ref={ref}>
      <div
        className="toggle"
        onClick={(e) => {
          if (open === undefined) {
            setOptionOpen(false);
            e.stopPropagation();
          }
        }}
      >
        {cloneElement(btn, { ref: buttonRef })}
      </div>
      {(open || optionOpen) &&
        (usingPortalNode && portalNode && portalNode.current ? (
          createPortal(
            <div
              className={cn("isolated-dropdown-item-area", placement)}
              ref={dropdownItemsRef}
              style={{
                width: width,
                top: offset.top,
                left: offset.left,
                visibility,
              }}
            >
              {children}
            </div>,
            portalNode.current
          )
        ) : (
          <div className={cn("item-area", placement)} style={{ width }}>
            {children}
          </div>
        ))}
    </div>
  );
};

export default DropDown;
