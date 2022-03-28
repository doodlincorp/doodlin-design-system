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
import { useOutsideClick } from "doodlin-hooks";

import { getOffset } from "../../utils/offset";
import { debounce } from "../../utils/debounce";
import { usePortalNode } from "../../hooks/usePortalNode";

export interface DropDownProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  placement?: "left" | "right" | "maxLeft" | "maxRight";
  btn: JSX.Element;
  width?: number;
  zIndex?: number;
}

const DropDown = React.forwardRef<HTMLDivElement, DropDownProps>(
  (
    {
      children,
      className,
      btn,
      placement = "left",
      width,
      zIndex = 10000000,
      ...props
    },
    ref
  ) => {
    const dropdownWrapperRef = useRef<HTMLDivElement>(null);
    const dropdownToggleButtonRef = useRef<HTMLButtonElement>(null);
    const dropdownItemsWrapperRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [offset, setOffset] = useState({ top: 0, left: 0 });
    const [visibility, setVisibility] = useState<"visible" | "hidden">(
      "hidden"
    );
    const portalNode = usePortalNode("dropdown-portal");

    useOutsideClick(() => {
      setIsDropdownOpen(false);
    }, dropdownItemsWrapperRef);

    useEffect(() => {
      setVisibility("hidden");
      const update = () => {
        if (isDropdownOpen) {
          const currentOffset = getOffset(
            dropdownWrapperRef.current as HTMLElement
          );
          switch (placement) {
            case "left":
              currentOffset.top +=
                (dropdownToggleButtonRef.current?.offsetHeight || 0) + 4;
              currentOffset.left -=
                (dropdownItemsWrapperRef.current?.offsetWidth || 0) -
                (dropdownToggleButtonRef.current?.offsetWidth || 0);
              break;
            case "maxLeft":
              currentOffset.left -=
                (dropdownItemsWrapperRef.current?.offsetWidth || 0) + 8;
              break;
            case "right":
              currentOffset.top +=
                (dropdownToggleButtonRef.current?.offsetHeight || 0) + 4;
              break;
            case "maxRight":
              currentOffset.left +=
                (dropdownToggleButtonRef.current?.offsetWidth || 0) + 8;
              break;
          }
          setOffset(currentOffset);
          setVisibility("visible");
        }
      };
      const handler = debounce(() => {
        update();
      }, 100);
      let observer: MutationObserver;
      if (isDropdownOpen) {
        update();
        document.addEventListener("scroll", handler, true);
        // dropdown Item의 width, nested scroll등이 바뀌는 경우 대응
        observer = new MutationObserver(handler);
        if (dropdownItemsWrapperRef.current) {
          observer.observe(dropdownItemsWrapperRef.current, {
            attributes: true,
          });
        }
      }
      return () => {
        if (observer) {
          observer.disconnect();
        }
        document.removeEventListener("scroll", handler, true);
      };
    }, [isDropdownOpen, open]);

    return (
      <div
        className={cn("_DROP_DOWN_", className)}
        ref={dropdownWrapperRef}
        {...props}
      >
        <div
          className="toggle"
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen((s) => !s);
          }}
        >
          {cloneElement(btn, { ref: dropdownToggleButtonRef })}
        </div>
        {isDropdownOpen &&
          portalNode.current &&
          createPortal(
            <div
              className={cn("isolated-dropdown-item-area", placement)}
              ref={dropdownItemsWrapperRef}
              style={{
                width: width,
                top: offset.top,
                left: offset.left,
                visibility,
                zIndex: zIndex,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(false);
              }}
            >
              {children}
            </div>,
            portalNode.current
          )}
      </div>
    );
  }
);

export default DropDown;
